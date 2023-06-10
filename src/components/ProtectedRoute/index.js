import {Route, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import Header from '../Header'
import NavigationBar from '../NavigationBar'

import {NavBarAndTabsContainer} from './styledComponent'

const ProtectedRoute = props => {
  const Token = Cookies.get('jwt_token')

  if (Token === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <NavBarAndTabsContainer>
        <NavigationBar />
        <Route {...props} />
      </NavBarAndTabsContainer>
    </>
  )
}

export default ProtectedRoute
