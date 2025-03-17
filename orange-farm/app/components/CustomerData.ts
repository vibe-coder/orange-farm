

interface Profile {
    profilePictureURL: string,
    name: string,
    company: string
}


const customerData: Profile[]  = [
    {
        profilePictureURL: '/icons/Chris.png',
        name: 'Christ Friedkly',
        company: 'Supermarket Villanova'
    },

    {
        profilePictureURL: '/icons/Maggie.png',
        name: 'Maggie Johnson',
        company: 'Oasis Organic Inc.'
    },
    {
        profilePictureURL: '/icons/Harry.png',
        name: 'Gael Harry',
        company: 'Newyork Finest Fruits'
    },
    {
        profilePictureURL: '/icons/Jenna.png',
        name: 'Jenna Sullivan',
        company: 'Wallmart'
    }
]


export default customerData