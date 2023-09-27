import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import Contact, {loader as contactLoader} from './routs/contact';
import Root, {
   loader as rootLoader,
   action as rootAction,
 } from "./routs/root";
 import EditContact, {action as editAction} from './routs/edit';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
      path: "contacts/:contactId",
      element: <Contact />,
      loader: contactLoader,
    },
    {
      path: "contacts/:contactId/edit",
      element: <EditContact />,
      loader: contactLoader,
      action: editAction,
    },

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