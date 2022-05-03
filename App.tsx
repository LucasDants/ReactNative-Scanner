import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Routes } from './src/routes';
import store from './src/store';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <StatusBar backgroundColor="transparent" translucent />
        <Routes />
      </Provider>
    </ThemeProvider>
    )
}

