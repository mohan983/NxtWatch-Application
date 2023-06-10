import {withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'

import VideoAndThemeContext from '../../Context/VideoAndThemeContext'

import {
  LogoLink,
  NavbarHeader,
  HeaderLogo,
  ActionsContainer,
  ThemeButton,
  LogoutButton,
  ProfileImage,
  ModalContainer,
  CloseButton,
  ConfirmButton,
  ButtonsContainer,
  ConfirmMsg,
} from './styledComponent'

const Header = props => (
  <VideoAndThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme, changeTab} = value
      const color = isDarkTheme ? '#ffffff' : '#00306e'
      const bgColor = isDarkTheme ? '#212121' : '#f8fafc'

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogo = () => {
        changeTab('Home')
      }

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavbarHeader bgColor={bgColor}>
          <LogoLink to="/">
            <HeaderLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
              onClick={onClickLogo}
            />
          </LogoLink>
          <ActionsContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutButton type="button" color={color}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer>
                  <ConfirmMsg>Are you sure, you want to logout?</ConfirmMsg>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </ActionsContainer>
        </NavbarHeader>
      )
    }}
  </VideoAndThemeContext.Consumer>
)

export default withRouter(Header)
