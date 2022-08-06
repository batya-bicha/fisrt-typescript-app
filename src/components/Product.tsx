import React from 'react';
import { IProduct } from '../modeles';


interface ProductProps {
  product: IProduct
}


export default function Product({ product }: ProductProps) {
  const [details, setDetails] = React.useState(false)


  return (
    <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
      <img className='w-1/6' src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <span className='font-bold'> {product.price}$</span>
      <button
        onClick={() => setDetails(prev => !prev)}
        className={details
          ? 'py-2 px-4 border bg-blue-400'
          : 'py-2 px-4 border bg-yellow-400'}
      >
        {!details ? 'Show Details' : 'Hide Details'}
      </button>
      {details &&
        <div>
          <p>{product.description}</p>
          <p>Rate: <span style={{ 'fontWeight': 'bold' }}>{product?.rating?.rate}</span></p>
        </div>}
    </div>
  )
}
