import { Reducer } from "redux"
import { IQRCodeList } from "./types"

import produce from 'immer'

const INITIAL_STATE: IQRCodeList = []

const QRList: Reducer<IQRCodeList> = (state = INITIAL_STATE, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case 'ADD_QRCODE_TO_LIST': {
                const { QRCode } = action.payload
                
                const QRCodeAlreadyScanned = draft.some(item => item === QRCode)
                
                if(QRCodeAlreadyScanned) {
                    break;
                }

                draft.unshift(QRCode)
                break;
            }
            default: {
                return draft
            }
        }
    })
}

export default QRList