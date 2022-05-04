import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Routes } from './src/routes';
import store from './src/store';
import theme from './src/theme';

export default function App() {
  return (
     <GestureHandlerRootView style={styles.container}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ToastProvider>
            <StatusBar backgroundColor="transparent" translucent />
            <Routes />
          </ToastProvider>
        </Provider>
      </ThemeProvider>
     </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});