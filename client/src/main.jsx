import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/style.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
      <App />
    </div>
  </React.StrictMode>,
)
