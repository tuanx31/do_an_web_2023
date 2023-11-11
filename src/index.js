import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import "./global/styles/style.scss"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import reduxCustomize from './reudux';
import RouteCustom from "./router";

const { store, persistor } = reduxCustomize()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <RouteCustom />
        <ToastContainer
          position="bottom-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

