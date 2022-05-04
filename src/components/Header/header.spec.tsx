import React from 'react'

import { render } from '@testing-library/react-native'

import { ThemeProvider } from 'styled-components/native'
import theme from '../../theme'

import { Header } from '.'

const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
)

describe('Header Component', () => {

  it("should match the snapshot test", () => {
    const { toJSON } = render(
      <Header title='Test' />, {wrapper: Providers}
    )

    const component = toJSON()
    expect(component).toMatchSnapshot()

  })

  it("should have the correct title", () => {
    const { getByText } = render(
      <Header title='Test' />, {wrapper: Providers}
    )

    expect(getByText('Test')).toBeTruthy()

  })

})