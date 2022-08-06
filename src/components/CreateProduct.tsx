import React from 'react'
import { IProduct } from '../modeles';
import axios from 'axios'
import Error from './Error';


const productData: IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10
  }
}


interface CreateProductProps {
  onCreate: (product: IProduct) => void
}



function CreateProduct({onCreate}: CreateProductProps) {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState('')


  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('')


    if (value.trim().length === 0) {
      setError('Please enter valid title')
      return
    }


    productData.title = value
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
  
    onCreate(response.data)
  }


  const changeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }


  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={changeHandler}
        type="text"
        className='border py-2 px-4 mb-2 w-full outline-0'
        placeholder='Enter product title..'
        value={value}
      />
      {error && <Error error={error} />}
      <button type='submit' className='py-2 px-4 border bg-yellow-400'>
        Create
      </button>
    </form>
  )
}

export default CreateProduct