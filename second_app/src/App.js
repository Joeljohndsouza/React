import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {createBrowserRouter,RouterProvder, RouterProvider} from 'react-router-dom'
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './components/NotFound.jsx';
import Courses from './components/Courses.jsx';
import CourseItem from './components/CourseItem.jsx';
import GitHubCard from './components/GitHubCard.jsx';







const router=createBrowserRouter([

  {
    path:"/about",
    element: <><Navbar/><About/><Footer/></>
  },
  {
    path:"/courses",
    element: <><Navbar/><Courses/><Footer/></>,
    children:[


      {
        index:true,
        element:<>
        <CourseItem id={1} name="Web designing" fees={20000}/>
        <CourseItem id={2} name="Foundation with sql" fees={25000}/>
        </>
      },


{
  path:"web-designing",
  element:<CourseItem id={1} name="Web designing" fees={20000}/>
},
{
  path:"sql",
element:<CourseItem id={2} name="Foundation with sql" fees={25000}/>

},
{

}]


},{path:"/github-card",
element:<GitHubCard/>
},

    
  

  {
    path:"/contact/:id",
    element:<><Navbar/><Contact/><Footer/></>
  }, 
  {
    path:"/",
    element:<>
    <Navbar/>
    <Footer/></>
  },
  {
    path:"*",
    element:<NotFound/>
    
  }
  

])



function App() {
  return (
    <div>
      {/*<Navbar/>*/}
{<RouterProvider router={router}/>}
      

    </div>
    

    
  );
}

export default App;
