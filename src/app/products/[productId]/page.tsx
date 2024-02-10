import { Metadata } from "next";


type Props= {
    params: {
        productId: string
    }
}

export const generateMetadata = async({params}:Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`Iphone ${params.productId}`)
        },100)
    })
    return {
        title: `Product ${title}`
    }
}

export default function Product({params}:Props) {
    return (
        <h1>Details about Product {params.productId}</h1>
    )
}