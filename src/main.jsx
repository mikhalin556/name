import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from './routes/root'
import { Home } from './Pages/Home'
import { Catalog } from './Pages/Catalog'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <div>404. Страница не найдена</div>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/catalog',
        element: <Catalog/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
