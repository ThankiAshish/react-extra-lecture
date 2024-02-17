import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { privateRoutes, publicRoutes } from './routes/index';

import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';

import UserStore from "./store/LoginStore";

const App = () => {
  const { loginState, setLoginState, loginData } = UserStore();

  useEffect(() => {
    if (localStorage.getItem('userDetails')) {
      setLoginState(true);
      loginData(JSON.parse(localStorage.getItem('userDetails')));
    }
  }, [loginData, setLoginState]);

  const PrivateRoutes = () => {
    return (
      <Routes>
        {
          privateRoutes.map((route, index) => {
            return <Route key={index} path={route.path} element={route.component} index={route.index} />
          })
        }
      </Routes>
    )
  }

  const PublicRoutes = () => {
    return (
      <Routes>
        {
          publicRoutes.map((route, index) => {
            return <Route key={index} path={route.path} element={route.component} index={route.index} />
          })
        }
      </Routes>
    )
  }

  return (
    <>
      <Router>
        {
          loginState ? (
            <AdminLayout>
              <PrivateRoutes />
            </AdminLayout>
          ) : (
            <AuthLayout>
              <PublicRoutes />
            </AuthLayout>
          )
        }
      </Router>
    </>
  )
}

export default App