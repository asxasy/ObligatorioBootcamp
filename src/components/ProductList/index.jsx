import React from 'react';
import PropTypes from 'prop-types';

import Product from 'Components/Product';
import productType from 'Data/shapes';

import './styles.scss';

const ProductList = ({ products = [] }) => {
  const productList = products;

  return (
    <div className="product-list">
      {productList.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(productType).isRequired,
};

export default ProductList;
