
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Student from './components/Student';
import Demo from './components/Demo';
import ChangeName from './components/ChangeName';
import School from './components/School';
import Counter from './components/Counter';
import EvenOdd from './components/EvenOdd';
import DisplayName from './components/Displayname';
import LoggedIn from './components/LoggedIn';








function App() {
  return (
    <div className="App">
      <h1>Welcome to my App</h1>
      <LoggedIn/>
      <Header/>
      <Footer/>
      <Student id={101} name="Nikita"/>
      <Student id={102} name="Ankita"/>
      <Demo message="Happy new year" year="2025" />
      <School/>
      <ChangeName/>
      <Counter/>
      <EvenOdd/>
      <DisplayName/>
      

      

      

      
    </div>
  );
}

export default App;
//export default function_name
