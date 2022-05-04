import {FlatList, FlatListProps} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray[900]};
`;

export const QRCodeList = styled(
  FlatList as new (props: FlatListProps<string>) => FlatList,
).attrs({
  contentContainerStyle: {
    padding: 12,
  },
  showsVerticalScrollIndicator: false,
})``;

export const EmptyListText = styled.Text`
  ${({theme}) => css`
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.white};
  `}
  line-height: 20px;
  text-align: center;
`;