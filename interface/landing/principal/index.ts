// interface Landing

export interface landingPrincipalInterface {
    id: number,
    title: string,
    text: string,
    left: string,
    top:string,
    img: any
}

export interface WhatYouShouldKnowInterface {
    id: number,
    title: string,
    text: string,
}

export interface TabsInterface {
    id: number,
    title: string
}
export interface HowDoesItWorkDataInterface {
    id: number,
    title: string,
    text: string,
    width: number,
    img: any
}

export interface Tabs_Plan_Interface {
    id: number,
    text: string
}

export interface Impact_Data_Interface {
    id: number,
    text: string
}

export interface Our_Team_Galery_Interface {
    id: number,
    title: string,
    credential: string,
    experience: string,
    img: string
}

export interface why_use_responsive_Tabs_Interface {
    q1: boolean,
    q2: boolean,
    q3: boolean
}

export interface why_use_responsive_function_Interface {
    type: string,

}