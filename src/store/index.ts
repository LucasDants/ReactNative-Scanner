import { IQRCodeList } from './modules/qrlist/types'
import rootReducer from './modules/rootReducer'
import { configureStore } from '@reduxjs/toolkit'

export interface IState {
    qrlist: IQRCodeList
}

const store = configureStore({reducer: rootReducer}) 

export default store