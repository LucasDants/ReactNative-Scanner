import React from 'react'

import { fireEvent, render } from '@testing-library/react-native'

import { ThemeProvider } from 'styled-components/native'
import theme from '../../theme'

import { Search } from '.'

const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
)

describe('Search Component', () => {

  it("should match the snapshot test", () => {
    const { toJSON } = render(
      <Search onClear={() => {}} onSearch={() => {}} />, {wrapper: Providers}
    )

    const component = toJSON()
    expect(component).toMatchSnapshot()

  })

  it("should have the correct value in the input", () => {
    const { getByTestId } = render(
       <Search onClear={() => {}} onSearch={() => {}} value="test-value" />, {wrapper: Providers}
    )

    const input = getByTestId("input")

    expect(input.props.value).toBe('test-value')

  })

  it("should call the onClear function when the button Clear is press", () => {
    const onClear = jest.fn();

    const { getByTestId } = render(
       <Search onClear={onClear} onSearch={() => {}} />, {wrapper: Providers}
    )

    const buttonClear = getByTestId("button-clear")

    fireEvent.press(buttonClear)

    expect(onClear).toBeCalledTimes(1)

  })

  it("should call the onSearch function when the button Search is press", () => {
    const onSearch = jest.fn();

    const { getByTestId } = render(
       <Search onClear={() => {}} onSearch={onSearch} />, {wrapper: Providers}
    )

    const buttonSearch = getByTestId("button-search")

    fireEvent.press(buttonSearch)

    expect(onSearch).toBeCalledTimes(1)

  })

})