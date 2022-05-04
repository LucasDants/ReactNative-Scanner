import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray[900]};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const RequestPermissions = styled.Text`
  text-decoration: underline;
  padding: 24px 0;
  color: ${({ theme }) => theme.colors.blue};
 
`