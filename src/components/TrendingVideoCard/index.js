import VideoAndThemeContext from '../../Context/VideoAndThemeContext'

import {
  ItemLink,
  TrendingListItem,
  TrendingThumbNailImage,
  TrendingVideoDetails,
  TrendingProfileImage,
  TrendingContentSection,
  TrendingTitle,
  TrendingChannelName,
  TrendingViewsAndDate,
  TrendingDot,
} from './styledComponent'

const TrendingVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  return (
    <VideoAndThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink to={`/videos/${id}`}>
            <TrendingListItem>
              <TrendingThumbNailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoDetails>
                <TrendingProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TrendingContentSection>
                  <TrendingTitle color={textColor}>{title}</TrendingTitle>
                  <TrendingChannelName color={textColor}>
                    {name}
                  </TrendingChannelName>
                  <TrendingViewsAndDate color={textColor}>
                    {viewCount} views<TrendingDot> &#8226; </TrendingDot>
                    {publishedAt}
                  </TrendingViewsAndDate>
                </TrendingContentSection>
              </TrendingVideoDetails>
            </TrendingListItem>
          </ItemLink>
        )
      }}
    </VideoAndThemeContext.Consumer>
  )
}

export default TrendingVideoCard
