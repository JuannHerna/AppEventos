import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

// views
import App from './App.jsx'
import Login from './views/Login.jsx';
import Register from './views/Register.jsx';
import Events from './views/Events.jsx';
import Fav from './views/Fav.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/algo",
    element: <h1>Hola</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/events",
    element: <Events />
  },
  {
    path: "/favoritos",
    element: <Fav />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
