import React from 'react'

import { render } from '@testing-library/react-native'

import { ThemeProvider } from 'styled-components/native'
import theme from '../../theme'

import { Scanner } from '.'
import { Provider } from 'react-redux'
import store from '../../store'

const Providers = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  </Provider>
)

describe('Scanner Screen', () => {

  it("should match the snapshot test", () => {
    const { toJSON } = render(
      <Scanner />, {wrapper: Providers}
    )

    const component = toJSON()
    expect(component).toMatchSnapshot()

  })
})