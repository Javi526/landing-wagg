
export type Type_TagSelect_State_Id =  1 | 2 | 3 | 4 | 5 | 6| 7;

export interface TagSelect_Item_Interface {
    id: Type_TagSelect_State_Id,
    textOne: string,
    textTwo: string,
    textThree: string,
    background: string,
    border: string
}

export interface TagSelect_State_Interface {
    select_item1: boolean,
    select_item2: boolean,
    select_item3: boolean,
    select_item4: boolean,
    select_item5: boolean,
    select_item6: boolean,
    select_item7: boolean,
}

export interface TagSelect_Option_Interface {
    id: number,
    value: string
}