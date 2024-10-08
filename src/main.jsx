
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import React from 'react';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails';
import About from './components/About/About';
import TopBooks from './components/TopBooks/TopBooks';
import FAQ from './components/Faq/Faq';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import PrivateRoute from './routes/PrivateRoutes';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book/:bookId",
        element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
        loader: () => fetch('https://book-vibe-backend.vercel.app/api/books'),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/topbooks",
        element: <TopBooks></TopBooks>,
        loader: () => fetch('../topbook.json'),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>
      },
      {
        path: "/listedbooks",
        element: <PrivateRoute><ListedBooks></ListedBooks></PrivateRoute>,
      },
      {
        path: "/pagestoread",
        element: <PrivateRoute><PagesToRead></PagesToRead></PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router}></RouterProvider>
    </FirebaseProvider>
  </React.StrictMode>,
)
