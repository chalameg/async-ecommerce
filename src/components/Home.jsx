import React, { useEffect } from 'react';
import Categories from './Categories/Categories';
import { useDispatch } from 'react-redux';
import { loadProducts } from '../redux/slices/productSlice';
import AddAddressPage from './AddAddressPage/AddAddressPage';

// import { getAllProducts, getSpecificProduct } from '../services/products';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <header className="App-header">
        <p className="bg-red-300 p-3 rounded">ECOMMERCE WEBSITE</p>
      </header>
      <Categories />
      <AddAddressPage />
    </div>
  );
};

export default Home;
