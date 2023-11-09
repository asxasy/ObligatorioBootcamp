import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../../api/products';
import './styles.scss';

const Cartproduct = ({ productId, quantity }) => {
  const [product, setProduct] = useState({});
  const [finalPrice, setfinalPrice] = useState();

  const retrieveProductDetails = async () => {
    const selectedProduct = await getProductDetails(productId);
    console.log(selectedProduct);
    setProduct(selectedProduct.data);
    setfinalPrice(selectedProduct.data.price * quantity);
  };

  useEffect(() => {
    retrieveProductDetails();
  }, []);

  return (
    <div className="product-cart">
      <img
        className="product-cart__image"
        src={product.image}
        alt={product.title}
      />
      <div className="product-cart__details">
        <h3 className="product-cart__title">{product.title}</h3>
        <p className="product-cart__price">Price {product.price} USD</p>
        <p className="product-cart__quantity">Quantity: {quantity}</p>
        <p className="product-cart__finalprice">Total Price {finalPrice} USD</p>
      </div>
    </div>
  );
};

Cartproduct.propTypes = {
  productId: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Cartproduct;
