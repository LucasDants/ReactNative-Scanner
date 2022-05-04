import React from 'react';

import {Button, ButtonClear, Container, Input, InputArea} from './styles';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components/native';

type Props = TextInputProps & {
  onSearch: () => void;
  onClear: () => void;
};

export function Search({
  onSearch,
  onClear,
  ...rest
}: Props) {
  const {colors} = useTheme();
  return (
    <Container>
      <InputArea>
        <Input
          placeholder="Search QRCodes..."
          placeholderTextColor={colors.gray[100]}
          {...rest}
        />
        <ButtonClear onPress={onClear}>
          <FontAwesome name="remove" size={16} color={colors.gray[100]} />
        </ButtonClear>
      </InputArea>

      <Button onPress={onSearch}>
        <FontAwesome name="search" size={16} color={colors.white} />
      </Button>
    </Container>
  );
}