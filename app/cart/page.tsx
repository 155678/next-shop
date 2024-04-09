
import { ProductsProps } from '@/components/NewProducts'
import Product from '@/components/Product'
import React, { FC } from 'react'

const  page : FC<ProductsProps> = ( ) => {
  return (
      <div className="p-2">
        <Product />
      </div>
   )
}  

export default page