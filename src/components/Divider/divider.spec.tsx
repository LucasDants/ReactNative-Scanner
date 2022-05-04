import React from 'react'

import { render } from '@testing-library/react-native'

import { ThemeProvider } from 'styled-components/native'
import theme from '../../theme'

import { Divider } from '.'

const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
)

describe('Divider Component', () => {

  it("should match the snapshot test", () => {
    const { toJSON } = render(
      <Divider />, {wrapper: Providers}
    )

    const component = toJSON()
    expect(component).toMatchSnapshot()

  })
})