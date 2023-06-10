import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  LoginFormContainer,
  LogoContainer,
  Logo,
  Label,
  Input,
  ShowPasswordContainer,
  ErrorMsg,
  LoginButton,
} from './styledComponent'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitErr: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onChangeStatus = e => {
    this.setState({showPassword: e.target.checked})
  }

  onSubmitLoginForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitErr: true, errorMsg})
  }

  render() {
    const {
      username,
      password,
      showSubmitErr,
      errorMsg,
      showPassword,
    } = this.state

    const Token = Cookies.get('jwt_token')
    if (Token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginContainer>
        <LoginFormContainer onSubmit={this.onSubmitLoginForm}>
          <LogoContainer>
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </LogoContainer>
          <Label htmlFor="username">USERNAME</Label>
          <Input
            type="text"
            id="username"
            value={username}
            placeholder="Username"
            onChange={this.onChangeUsername}
          />
          <Label htmlFor="password">PASSWORD</Label>
          <Input
            type={`${showPassword ? 'text' : 'password'}`}
            id="password"
            value={password}
            placeholder="Password"
            onChange={this.onChangePassword}
          />
          <ShowPasswordContainer>
            <Input
              id="checkbox"
              type="checkbox"
              checked={showPassword}
              onChange={this.onChangeStatus}
            />
            <Label htmlFor="checkbox">Show Password</Label>
          </ShowPasswordContainer>
          {showSubmitErr ? <ErrorMsg>*{errorMsg}</ErrorMsg> : null}
          <LoginButton type="submit">Login</LoginButton>
        </LoginFormContainer>
      </LoginContainer>
    )
  }
}

export default LoginForm
