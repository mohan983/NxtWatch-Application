import styled from 'styled-components'

export const VideoDetailViewContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  width: 85vw;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 230px;
    margin-bottom: 0px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
