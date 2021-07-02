/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from '../components/TextField';
import '../styles/containers/Information.css';
import AppContext from '../context/AppContext';

function Information() {
  const validate = Yup.object({
    name: Yup.string()
      .max(35, 'Debe tener 35 caracteres o menos')
      .required('Campo Requerido'),
    email: Yup.string()
      .max(25, 'Debe tener 25 caracteres o menos')
      .required('Campo Requerido'),
    address: Yup.string()
      .max(50, 'Debe tener 50 caracteres o menos')
      .required('Campo Requerido'),
    apto: Yup.string()
      .max(15, 'Debe tener 15 caracteres o menos')
      .required('Campo Requerido'),
    city: Yup.string()
      .max(25, 'Debe tener 25 caracteres o menos')
      .required('Campo Requerido'),
    country: Yup.string()
      .max(25, 'Debe tener 25 caracteres o menos')
      .required('Campo Requerido'),
    state: Yup.string()
      .max(25, 'Debe tener 25 caracteres o menos')
      .required('Campo Requerido'),
    cp: Yup.string()
      .max(10, 'Debe tener 10 caracteres o menos')
      .required('Campo Requerido'),
    phone: Yup.string()
      .min(8, 'debe tener 8 o más caracteres')
      .max(12, 'Debe menos de 12 caracteres')
      .required('Campo Requerido'),
  });

  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;

  const history = useHistory();

  const validationBuyer = (Buyer) => {
    if (
      Buyer.name === '' ||
      Buyer.email === '' ||
      Buyer.address === '' ||
      Buyer.address === '' ||
      Buyer.apto === '' ||
      Buyer.city === '' ||
      Buyer.country === '' ||
      Buyer.state === '' ||
      Buyer.cp === '' ||
      Buyer.phone === ''
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = (Buyer) => {
    console.log(Buyer);
    if (validationBuyer(Buyer)) {
      addToBuyer(Buyer);
      history.push('/checkout/payment');
    }
  };

  return (
    <div className="Information">
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.id}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de Contacto</h2>
        </div>
        <div className="Information-form">
          <Formik
            initialValues={{
              name: '',
              email: '',
              address: '',
              apto: '',
              city: '',
              country: '',
              state: '',
              cp: '',
              phone: '',
            }}
            validationSchema={validate}
          >
            {(formik) => (
              <div>
                <h1>Information</h1>
                {console.log(formik.values)}
                <Form>
                  <TextField name="name" type="text" />
                  <TextField name="email" type="text" />
                  <TextField name="address" type="text" />
                  <TextField name="apto" type="text" />
                  <TextField name="city" type="text" />
                  <TextField name="country" type="text" />
                  <TextField name="state" type="text" />
                  <TextField name="cp" type="text" />
                  <TextField name="phone" type="text" />
                  <div className="Information-buttons">
                    <div className="Information-back">
                      <Link to="/checkout">
                        <i className="fas fa-arrow-left" />
                      </Link>
                    </div>
                    <div className="Information-next">
                      <button
                        type="submit"
                        onClick={() => handleSubmit(formik.values)}
                      >
                        Pagar
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Information;
