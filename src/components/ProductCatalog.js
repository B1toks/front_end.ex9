import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../store/productsSlice';
import { addToCart } from '../store/cartSlice';
import './ProductCatalog.css';  

const ProductCatalog = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.list);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      dispatch(setProducts(data)); 
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div>
      <h1>Product Catalog</h1>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCatalog;
