import { NextRouter } from "next/router";

export interface HeaderInterface {
     open: boolean,
     setOpen: any,
     router: NextRouter
}

export interface HeaderResponsive {
    router: NextRouter
}

export interface MenuInterface {
    id: number,
    name: string
}