export interface AddContact{
    name: string,
    number: string
}


export interface IContact extends AddContact{
        favorite: boolean,
    _id: string
}

