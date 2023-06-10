import VideoAndThemeContext from '../../Context/VideoAndThemeContext'
import {
  ItemLink,
  GamingListItem,
  GamingThumbNailImage,
  GamingContentSection,
  GamingTitle,
  GamingViewsAndDate,
} from './styledComponent'

const VideoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <VideoAndThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink to={`/videos/${id}`} className="link">
            <GamingListItem>
              <GamingThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingContentSection>
                <GamingTitle color={textColor}>{title}</GamingTitle>
                <GamingViewsAndDate color={textColor}>
                  {viewCount} Watching Worldwide
                </GamingViewsAndDate>
              </GamingContentSection>
            </GamingListItem>
          </ItemLink>
        )
      }}
    </VideoAndThemeContext.Consumer>
  )
}

export default VideoCard
