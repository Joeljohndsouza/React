import logo from './logo.svg';
import './App.css';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Register from './components/User/Register';


// Creating routes
const routes = createBrowserRouter([
  
  {
    path:"/",
    element:<><Navbar/><Main/></>
  }
,
{
  path:"/navbar",
  element: <Main/>
  
}
,
{
  path:"/register",
  element: <Register/>
}
])


function App() {
  return (
    <div className="">

    <RouterProvider router={routes} />

    </div>
  );
}

export default App;