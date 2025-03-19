



interface CustomerMessage{
    key: number,
    pictureURL: string,
    name: string,
}



export const customerWithMessage: CustomerMessage[] = [
    {   
        key: 1,
        pictureURL: '/icons/Maggie.png',
        name: 'Maggie Johnson'
    },
    {
        key: 2,
        pictureURL: '/icons/John.png',
        name: "John"
    }
]



export const customerWithNoMessage: CustomerMessage[] = [
    {
        key: 3,
        pictureURL: '/icons/Doe.png',
        name: 'Doe'
    },
    {
        key: 4,
        pictureURL: '/icons/Smith.png',
        name: 'Smith'
    }
]



