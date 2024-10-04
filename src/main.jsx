
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
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../book.json'),
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
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
