import React from 'react';

import {
  Container, QRCodePayload
} from './styles';

type Props = {
  children: string
}

export function QRItem({ children }: Props){
  return (
    <Container>
      <QRCodePayload>{children}</QRCodePayload>
    </Container>
  );
}