import React, { useEffect, useState } from 'react';

import { BarCodeScanner, BarCodeScannerResult, requestPermissionsAsync } from 'expo-barcode-scanner';

import { useDispatch } from 'react-redux';
import { addQRCodeToList } from '../../store/modules/qrlist/actions';

import { useToast } from 'react-native-toast-notifications';

import { Header } from '../../components/Header';

import { Container, Content, RequestPermissions } from './styles';

export function Scanner(){
  const [hasPermission, setHasPermission] = useState(null)

  

  const toast = useToast()
  const dispatch = useDispatch()

    function handleAddQRCode({ data }: BarCodeScannerResult) {
        dispatch(addQRCodeToList(data))

        toast.show('QRCode Scanned!', {
          type: 'success',
          placement: 'top',
          style: {
            marginTop: 20
          }
        })
    }

    function requestUserPermissions() {
      requestPermissionsAsync().then(response => {
       const { status } = response
        setHasPermission(status === 'granted')
     })
    }

    useEffect(() => {
      requestUserPermissions()
    }, [])

    if(hasPermission === null) {
      return <Container />
    }

    if(hasPermission === false) {
      return (
        <Container>
          <Header title='Scanner' />
          <Content>
            <RequestPermissions onPress={requestUserPermissions}>You need accept the permissions to enjoy your app!</RequestPermissions>
          </Content>
        </Container>
      )
    }

  return (
    <Container>
      <Header title="Scanner" />
      <BarCodeScanner type="back" onBarCodeScanned={handleAddQRCode} style={{ flex: 1 }}  />
    </Container>
  );
}
