// React
import React from 'react';
import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from 'react-router-dom';
// Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
// Pages
import Home from './pages/Home';
import Cart from './pages/Cart';

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
])

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;