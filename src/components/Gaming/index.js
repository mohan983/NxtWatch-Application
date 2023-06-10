import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import VideoAndThemeContext from '../../Context/VideoAndThemeContext'
import FailureView from '../FailureView'
import GamingVideoCard from '../GamingVideoCard'

import {
  GamingContainer,
  GamingTitleIconContainer,
  GamingVideoTitle,
  GamingVideoList,
  GamingText,
  LoaderContainer,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideoList>
        {gamingVideos.map(eachVideo => (
          <GamingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </GamingVideoList>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  onRetry = () => {
    this.getGamingVideos()
  }

  renderGamingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <VideoAndThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const titleBgColor = isDarkTheme ? '#231f20' : '#f1f5f9'

          return (
            <GamingContainer data-testid="gaming" bgColor={bgColor}>
              <GamingVideoTitle bgColor={titleBgColor}>
                <GamingTitleIconContainer>
                  <SiYoutubegaming size={35} color="#ff0000" />
                </GamingTitleIconContainer>
                <GamingText color={textColor}>Gaming</GamingText>
              </GamingVideoTitle>
              {this.renderGamingVideos()}
            </GamingContainer>
          )
        }}
      </VideoAndThemeContext.Consumer>
    )
  }
}

export default Gaming
