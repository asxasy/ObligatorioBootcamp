import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from 'Components/Error';
import { ColorRing } from 'react-loader-spinner';
import GoBack from 'Components/GoBack';
import { getProductDetails } from '../../api/products';
import noData from '../../assets/noData.png';

const ProductView = () => {
  const { id } = useParams();
  const [retrievedProduct, setRetrievedProduct] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const retrieveProductDetails = async () => {
    setLoading(true);
    const selectedProduct = await getProductDetails(id);

    console.log(selectedProduct);

    if (!id || !selectedProduct) {
      setError(true);
    } else {
      setRetrievedProduct(selectedProduct.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    retrieveProductDetails();
  }, []);

  const { title, price, category, description, image } =
    retrievedProduct || {};

  const renderProductView = () => {
    if (!loading) {
      if (!error) {
        return (
          <div className="product-view">
            <GoBack />
            <div className="product-view__details">
              <img
                className="product-view__image"
                src={image}
                alt={title}
              />
              <div className="product-view__text">
                <h2 className="product-view__title">{title}</h2>
                <p className="product-view__category">{category}</p>
                <p className="product-view__description">
                  {description}
                </p>
                <p className="product-view__price">{price}</p>
              </div>
            </div>
          </div>
        );
      }
      return (
        <Error title="No data found" image={noData} text="Error" />
      );
    }
    return (
      <ColorRing
        visible
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={[
          '#fafafa',
          '#e8e6e6',
          '#d4d2cf',
          '#b5b1aa',
          '#918c83',
          '#69635b',
          '#403c35',
        ]}
      />
    );
  };

  return <div>{renderProductView()}</div>;
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
