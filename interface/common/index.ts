export interface InputPrincipalInterface {
     width: number,
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

export interface ButtonInterface {
     width: number,
     height: number,
     text: string
}

export interface ButtonsInterface {
     width: number,
     height: number,
     textConfirm: string,
     textCancel: string
     question: boolean
     questionText: string,
     questionLink: string
}