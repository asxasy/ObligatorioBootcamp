import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../../api/products';

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
    <div className="product">
      <img src={product.image} alt={product.title} />
      <p className="product__title">{product.title}</p>
      <p className="product__price">{product.price}</p>
      <p className="product__quantity">{quantity}</p>
      <p className="product__finalprice">{finalPrice}</p>
    </div>
  );
};

Cartproduct.propTypes = {
  productId: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Cartproduct;
