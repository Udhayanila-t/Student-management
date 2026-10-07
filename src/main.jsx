import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Addstudent from './Addstudent.jsx';
const router = createBrowserRouter([{
  path:'/',
  element:<App/>
},
{
  path:'/add',
  element:<Addstudent/>
}


])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
