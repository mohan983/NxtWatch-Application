import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: #f8fafc;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginFormContainer = styled.form`
  background-color: #ffffff;
  background-size: cover;
  padding: 30px;
  font-family: Roboto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Logo = styled.img`
  height: 40px;
  width: 150px;
  margin-bottom: 25px;
`

export const Label = styled.label`
  color: #7e858e;
  font-size: 15px;
  margin-bottom: 6px;
`

export const Input = styled.input`
  color: #909090;
  width: ${props => (props.type === 'checkbox' ? null : 350)}px;
  border: 2px solid #616e7c;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 18px;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  width: 350px;
  color: #ffffff;
  font-size: 18px;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
`
