import ReactDOM from 'react-dom/client';
import Home from './views/Home/Home';
import './index.css'
import Productview from './views/Productview/Productview';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/product/:id',
    element : <Productview/>
  }

])

root.render(<RouterProvider router={router}/>);