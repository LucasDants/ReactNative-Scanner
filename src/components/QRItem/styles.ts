import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    padding: 24px 0;
`;

export const QRCodePayload = styled.Text`
  font-size: ${RFValue(14)}px;
`