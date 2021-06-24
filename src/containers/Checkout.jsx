import { product } from 'prelude-ls';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/containers/Checkout.css';

function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (acum, currentValue) => acum + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">


        <h3>{cart.length > 0 ? "Lista de Pedidos" : "Tu carrito está vacío"}</h3>

        {cart.map((item) => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
              <button type="button" onClick={handleRemove(item.cartId)}>
                <i className="fas fa-minus" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total: ${handleSumTotal()}</h3>
          <Link to="/checkout/information">
            <button type="submit">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;
