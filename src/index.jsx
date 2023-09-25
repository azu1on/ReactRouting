import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import Contact from './routs/contact';
import Root, { loader as rootLoader } from "./routs/root";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    children: [{
      path: "contacts/:contactId",
      element: <Contact />,
    }

    ]
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);



root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);