

interface Profile {
    key: number,
    profilePictureURL: string,
    name: string,
    company: string
}


const customerData: Profile[]  = [
    {
        key: 1,
        profilePictureURL: '/icons/Chris.png',
        name: 'Christ Friedkly',
        company: 'Supermarket Villanova'
    },

    {
        key: 2,
        profilePictureURL: '/icons/Maggie.png',
        name: 'Maggie Johnson',
        company: 'Oasis Organic Inc.'
    },
    {
        key: 3,
        profilePictureURL: '/icons/Harry.png',
        name: 'Gael Harry',
        company: 'Newyork Finest Fruits'
    },
    {
        key: 4,
        profilePictureURL: '/icons/Jenna.png',
        name: 'Jenna Sullivan',
        company: 'Wallmart'
    }
]


export default customerData