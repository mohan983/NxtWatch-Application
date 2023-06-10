import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  height: 92vh;
  margin-top: 8vh;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-left: 230px;
  }
`

export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const NotFoundVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NotFoundVideosHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const NotFoundVideosNote = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
`
