import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import Cart from "./pages/Cart.jsx"
import About from "./pages/About.jsx"
import ContactUs from "./pages/ContactUs.jsx"
import "./App.css"
import App from './App.jsx'
import Error from './pages/Error.jsx'
import ResMenu from './pages/ResMenu.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/> ,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/> ,
      },
      {
        path: "/about",
        element: <About/> ,
      },
      {
        path: "/contactus",
        element: <ContactUs/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ]
  },
  {
    path: "/restaurants/:resId",
    element: <ResMenu/>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
