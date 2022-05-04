import React from 'react'

import { render } from '@testing-library/react-native'

import { ThemeProvider } from 'styled-components/native'
import theme from '../../theme'

import { QRItem } from '.'

const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
)

describe('QRItem Component', () => {

  it("should match the snapshot test", () => {
    const { toJSON } = render(
      <QRItem>Test</QRItem>, {wrapper: Providers}
    )

    const component = toJSON()
    expect(component).toMatchSnapshot()

  })

  it("should have the correct children", () => {
    const { getByText } = render(
       <QRItem>Test</QRItem>, {wrapper: Providers}
    )

    expect(getByText('Test')).toBeTruthy()

  })

})