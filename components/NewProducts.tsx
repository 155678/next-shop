
import bag from "../public/bag.png"
import sunglasses from "../public/sunglasses.png"
import hat from "../public/hat.jpg"
import shoes from "../public/shoes.png"

export  type ProductsProps = {
    id?: number,
    productName?: string,
    price?: number,
    productImage?: string,
}

export const NewProducts= [
    {
        id: 1,
        productName: "bag",
        price: 68,
        productImage: bag,
    },
    {
        id: 2,
        productName: "sunglasses",
        price: 42 ,
        productImage: sunglasses ,
    },
    {
        id: 3,
        productName: "hat",
        price: 12 ,
        productImage: hat ,
    },
    {
        id: 4,
        productName: "shoes",
        price: 14,
        productImage: shoes ,
    },

]