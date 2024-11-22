export interface AddContact{
    name: string,
    number: number
}

export interface IContact extends AddContact{
    favorite: boolean,
    _id: string
}

