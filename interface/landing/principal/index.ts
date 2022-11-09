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

export interface Tabs_ClassName_Interface {
    Plan_content_item: string,
    Plan_content_button_container: string,
    Plan_content_button: string
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



export interface tabs_plan_field_Interface {
    title: string,
    price: string,
    time: string
    item: Tabs_Plan_Interface[],
    button: string
}

export interface PetParentPlanArray_Interface {
    id: number,
    description: tabs_plan_field_Interface,
    tabType: number
}