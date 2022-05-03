import React from 'react';
import { View, Text } from 'react-native'

export function Scanner(){
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>QRCode Scanner</Text>
    </View>
  );
}