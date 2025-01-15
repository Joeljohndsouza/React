import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar';
import Product from './components/products/Product';
import ProductForm from './components/products/ProductForm';

// Creating routes
const routes=createBrowserRouter([
  {
    path:"/products",
    element:<Product/>
  }
  ,
  {
    path:"/",
    element:<> <Navbar/> </>
  }
])
function App() {
  return (
    <div className="">
      <RouterProvider router={routes}/>
    
    </div>
  );
}

export default App;
