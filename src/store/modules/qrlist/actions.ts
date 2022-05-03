import { IQRCode } from "./types";

export function addQRCodeToList(QRCode: IQRCode) {
    return {
        type: "ADD_QRCODE_TO_LIST", 
        payload: {
            QRCode
        }  
    }
} 