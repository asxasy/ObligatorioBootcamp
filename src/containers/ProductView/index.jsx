import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../api/products';

const ProductView = () => {
  const { id } = useParams();

  const [retrievedProduct, setRetrievedProduct] = useState(null);
  const [error, setError] = useState(false);

  const retrieveProductDetails = async () => {
    const selectedProduct = await getProductDetails(id);

    console.log(selectedProduct);

    if (!id || !selectedProduct) {
      setError(true);
    } else {
      setRetrievedProduct(selectedProduct.data);
    }
  };

  useEffect(() => {
    retrieveProductDetails();
  }, []);

  if (error) {
    return (
      <div className="product-view product-view--error">
        <h1>Product not found</h1>
      </div>
    );
  }

  const { title, price, category, description, image } =
    retrievedProduct || {};

  return (
    <div className="product-view">
      <div className="product-view__go-back">
        <p>
          <a href="/">back</a>
        </p>
      </div>
      <div className="product-view__image">
        <img src={image} alt={title} />
      </div>
      <div className="product-view__details">
        <h2 className="product-view__title">{title}</h2>
        <p className="product-view__category">{category}</p>
        <p className="product-view__description">{description}</p>
        <p className="product-view__price">{price}</p>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default ProductView;
