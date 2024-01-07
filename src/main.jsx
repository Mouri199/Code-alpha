import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainBody from './Components/MainBody';
import Home from './Components/Home';
import InternShips from './Components/InternShips';
import InternShip from './Components/InternShip';
import HtmlFile from './Components/Tutorials/HtmlFile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainBody></MainBody>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/internship',
        element: <InternShips />
      },
      {
        path: '/courses',
        element: <InternShip />
      },
      {
        path: '/html',
        element: <HtmlFile></HtmlFile>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
 

)
