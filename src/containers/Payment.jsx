import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

import { useHistory, Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/containers/Payment.css';

function Payment() {
  const { state, addNewOrder, removeAllFromCart } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory();
  const paypalOptions = {
    clientId:
      'AX08UiQyfFyPrTXfV0xzaaU3ppvAKL1WQLpcIjKlgn-d3PoSJd6dbaBR3eo-mETKty2LrAv3F6kvGJLB',
    intent: 'capture',
    current: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handleSumTotal = () => {
    const reducer = (acum, currentValue) => acum + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      removeAllFromCart();
      history.push('/checkout/success');
    }
  };

  const handlePaymentCancel = (data) => {
    console.log('cancel');
    removeAllFromCart();
    history.push('/checkout/success');
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del Pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.id}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="Payment-button">
          <PayPalButton
            createOrder={(data, actions) =>
              actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: 'USD',
                      value: handleSumTotal(),
                    },
                  },
                ],
              })
            }
            onApprove={(data) => console.log('ok')}
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={parseFloat(handleSumTotal())}
            onPaymentStart={() => console.log('Start Payment')}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log('o vaya')}
            onCancel={(data) => handlePaymentCancel(data)}
          />
        </div>
      )}
    </div>
  );
}

export default Payment;
