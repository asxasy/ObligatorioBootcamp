import React from 'react';
import { Link } from 'react-router-dom';
import productType from 'Data/shapes';

const Product = ({ product }) => {
  const { id, title, price, image } = product;

  return (
    <Link className="product" to={`/products/${id}`}>
      <img src={image} alt={title} />
      <h3 className="product__title">{title}</h3>
      <p className="product__price">{price}</p>
    </Link>
  );
};

Product.propTypes = {
  product: productType.isRequired,
};

export default Product;
