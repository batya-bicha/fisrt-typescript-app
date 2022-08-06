import React from 'react'
import Loader from '../components/Loader';
import Error from '../components/Error';
import Product from '../components/Product';
import { useProducts } from '../hooks/products';
import Modal from '../components/Modal';
import CreateProduct from '../components/CreateProduct';
import { IProduct } from '../modeles';
import { ModalContext } from '../context/ModalText';


function ProductsPage() {
  const { loading, error, products, addProduct } = useProducts()
  const { modal, open, close } = React.useContext(ModalContext)


  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }


  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products.map(product =>
        <Product
          key={product.id}
          product={product}
        />)}

      {modal && <Modal onClose={() => close()} title="Create new product..">
        <CreateProduct
          onCreate={createHandler}
        />
      </Modal>}

      <button onClick={() => open()} className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white px-4 py-2'>
        +
      </button>
    </div>
  );
}

export default ProductsPage