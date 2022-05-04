import React from 'react'

import { fireEvent, render } from '@testing-library/react-native'

import { ThemeProvider } from 'styled-components/native'
import theme from '../../theme'

import { QRList } from '.'
import { Provider } from 'react-redux'
import store from '../../store'

const Providers = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  </Provider>
)

const qrlistData = ['code', 'mode', 'testing']
const dispatchActions = qrlistData.map(QRCode => ({type: 'ADD_QRCODE_TO_LIST', payload: { QRCode }})) 

describe('QRList Screen', () => {

  it("should match the snapshot test", () => {
    const { toJSON } = render(
      <QRList />, {wrapper: Providers}
    )

    const component = toJSON()
    expect(component).toMatchSnapshot()

  })

  it("should have an text warning when the list is empty", () => {
    const { getByText } = render(
      <QRList />, {wrapper: Providers}
    )

    expect(getByText("You don't have QRCodes yet! Read some to appear in the list!")).toBeTruthy()
  })

  it('should have a list of qrcodes', () => {
    store.dispatch(dispatchActions[0])
    store.dispatch(dispatchActions[1])
    store.dispatch(dispatchActions[2])
    
    const { getByText } = render(
      <QRList />, {wrapper: Providers}
    )

    expect(getByText("code")).toBeTruthy()
    expect(getByText("mode")).toBeTruthy()
    expect(getByText("testing")).toBeTruthy()
  })

  it('should filter the list of qrcodes by the search input value', () => {
    const { getByText, getByTestId, queryByText } = render(
      <QRList />, {wrapper: Providers}
    )

    const input = getByTestId('input')
    const buttonSearch = getByTestId('button-search')

    fireEvent.changeText(input, 'ode')
    fireEvent.press(buttonSearch)
    
    expect(getByText("code")).toBeTruthy()
    expect(getByText("mode")).toBeTruthy()
    expect(queryByText("testing")).toBeFalsy()
  })

  it('should clear the search input and the show the original list', () => {
    const { getByText, getByTestId, queryByText } = render(
      <QRList />, {wrapper: Providers}
    )

    const input = getByTestId('input')
    const buttonSearch = getByTestId('button-search')
    const buttonClear = getByTestId('button-clear')

    fireEvent.changeText(input, 'ode')
    fireEvent.press(buttonSearch)

    expect(getByText("code")).toBeTruthy()
    expect(getByText("mode")).toBeTruthy()
    expect(queryByText("testing")).toBeFalsy()
    
    fireEvent.press(buttonClear)

    expect(input.props.value).toBe('')

    expect(getByText("code")).toBeTruthy()
    expect(getByText("mode")).toBeTruthy()
    expect(getByText("testing")).toBeTruthy()

  })

})