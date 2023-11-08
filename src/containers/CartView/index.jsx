import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CartProduct from 'Components/CartProduct';
import Button from 'Components/Button';
import { getUserCart } from '../../api/carts';
import UserContext from '../../context/UserContext';
import ROUTES from '../../data/routes';

const CartView = () => {
  const { cartId } = useParams(); // {cartId: 2}
  const { loggedUser, setLoggedUser } = useContext(UserContext);
  const [retrievedCart, setRetrievedCart] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const retrieveCartDetails = async () => {
    const selectedCart = await getUserCart(cartId);

    console.log(selectedCart);

    if (!cartId || !selectedCart) {
      setError(true);
    } else {
      console.log('aaaaaaaaa');
      console.log(selectedCart.data[0]);
      setRetrievedCart(selectedCart.data[0]);
    }
  };

  useEffect(() => {
    retrieveCartDetails();
  }, []);

  if (error) {
    return (
      <div className="cart-view cart-view--error">
        <h1>Cart not found</h1>
      </div>
    );
  }

  const { id, userId, date, products } = retrievedCart || {
    date: null,
    id: null,
    products: [],
    userId: null,
  };

  return (
    <div className="cart-view">
      <div className="cart-view__go-back">
        <p>
          <a href="/">back</a>
        </p>
      </div>
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
            name="Buy Cart"
            onClick={() => navigate(ROUTES.home)}
          />
        )}
      </div>
    </div>
  );
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
