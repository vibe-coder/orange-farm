import Image from "next/image"


interface ButtonProps {
    id: number,
    name: string,
    iconURL: string
}

export default function Button({id, name, iconURL}: ButtonProps){
    return(
        <button className="flex py-4 pl-6 w-full hover:bg-lightorange gap-2">
            <Image src={iconURL} id={`${id}`} alt="icon" width={30} height={30} className="w-6" />
            {name}
        </button>
    )
}