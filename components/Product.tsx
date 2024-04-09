import { NewProducts } from '@/components/NewProducts';
import { ProductsProps } from '@/components/NewProducts';
import React, { FC } from 'react'

const  Product : FC<ProductsProps> = ( {id, productName, productImage, price}) => {
  return (
      <div className="p-2">
        <h2 className="text-pink-300 font-bold text-center text-xl p-4"> Products</h2>
        <div className="flex ml-20 m-4">
          <div className="bg-gray-200 m-2 p-1 rounded-md col-span-4">
            <img src="./bag.png" className="w-48 h-48 m-4 p-4 " />
            <h5 className="text-center text-pink-600 text-lg font-bold">{productName} bag</h5>
            <p className="text-center p2 m-2">price :12{price}$</p>
            <div className="flex ml-20 mt-2">               
          </div>
          </div>
          <div className="bg-gray-200 m-2 p-1 rounded-md col-span-4">
            <img src="./hat.jpg" className="w-48 h-48 m-4 p-4 " />
            <h5 className="text-center text-pink-600 text-lg font-bold">{productName}hat</h5>
            <p className="text-center  p2 m-2">price : 14{price}$</p>
            <div className="flex ml-20 mt-2">  
          </div>
        </div>
        <div className="bg-gray-200 m-2 p-1 rounded-md col-span-4">
            <img src="./shoes.png" className="w-48 h-48 m-4 p-4 " />
            <h5 className="text-center text-pink-600 text-lg font-bold">{productName}shoes</h5>
            <p className="text-center  p2 m-2">price : 23{price}$</p>
            <div className="flex ml-20 mt-2">  
          </div>
        </div>
        <div className="bg-gray-200 m-2 p-1 rounded-md col-span-4">
            <img src="./sunglasses.png" className="w-48 h-48 m-4 p-4 " />
            <h5 className="text-center text-pink-600 text-lg font-bold">{productName}sunglasses</h5>
            <p className="text-center  p2 m-2">price : 22{price}$</p>
            <div className="flex ml-20 mt-2">  
          </div>
        </div>
      </div>
    </div> 
   )
}  

export default Product