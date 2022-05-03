import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${RFValue(26)}px;
    color: ${theme.colors.white};
  `}
`;

export const Container = styled(LinearGradient).attrs(({theme}) => ({
  colors: [theme.colors.red[900], theme.colors.red[800]],
}))`
  justify-content: center;
  align-items: center;
  padding: 33px 24px 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.red[900]}; ;
`;