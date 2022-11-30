import { NextRouter } from "next/router";

export interface InputPrincipalInterface {
     width: string,
     height: number,
     label: string,
     placeholder: string,
     validAccount: boolean
}

export interface InputPasswordPrincipalInterface {
     width: number,
     height: number,
     label: string,
     labelPassword: string,
     placeholder: string,
}

export interface ButtonWhiteInterface {
     width: string,
     height: number,
     text: string
     router: NextRouter,
     WhiteButton_url: string
}

export interface ButtonPurpleInterface {
     width: string,
     height: number,
     text: string
     router: NextRouter,
     PurpleButton_url: string,
     disabled: boolean
}

export interface ButtonsInterface {
     width: string,
     height: number,
     textConfirm: string,
     textCancel: string
     question: boolean
     questionText: string,
     questionLink: string,
     url: string,
     PurpleButton_url: string,
     WhiteButton_url: string,
     margin: string
}