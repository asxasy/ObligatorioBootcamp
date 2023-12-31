import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CartProduct from 'Components/CartProduct';
import Button from 'Components/Button';
import Error from 'Components/Error';
import { ColorRing } from 'react-loader-spinner';
import GoBack from 'Components/GoBack';
import { getUserCart } from '../../api/carts';
import UserContext from '../../context/UserContext';
import ROUTES from '../../data/routes';
import noData from '../../assets/noData.png';
import './styles.scss';

const CartView = () => {
  const { cartId } = useParams(); // {cartId: 2}
  const { loggedUser, setLoggedUser } = useContext(UserContext);
  const [retrievedCart, setRetrievedCart] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const retrieveCartDetails = async () => {
    setLoading(true);

    try {
      const selectedCart = await getUserCart(cartId);
      setRetrievedCart(selectedCart.data[0]);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    retrieveCartDetails();
  }, []);

  const { products } = retrievedCart || {
    products: [],
  };

  const renderCartView = () => {
    if (!loading) {
      if (!error) {
        if (products.length === 0) {
          return <p className="empty-cart">The cart is empty :(</p>;
        }
        return (
          <div className="cart-view">
            <GoBack />
            <div className="cart-view__details">
              {products.map((product) => (
                <CartProduct
                  key={product.productId}
                  productId={product.productId}
                  quantity={product.quantity}
                />
              ))}
              {products.length > 0 && (
                <Button
                  className="cart-view__buy"
                  name="Buy Cart"
                  onClick={() => navigate(ROUTES.home)}
                />
              )}
            </div>
          </div>
        );
      }
      return <Error image={noData} />;
    }
    return (
      <div className="loader">
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
      </div>
    );
  };

  return <div>{renderCartView()}</div>;
};

CartView.propTypes = {
  cart: PropTypes.shape({
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    products: PropTypes.array.isRequired,
    userId: PropTypes.number.isRequired,
  }),
};

export default CartView;
