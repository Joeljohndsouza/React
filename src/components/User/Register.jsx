import React,{useEffect,useState}from 'react'
import { addUser,getUsers } from './RegisterService';




function Register() {


    let [user, setUser] = useState(null)


    const submitHandler = (e) => {

        e.preventDefault();
        addUser({
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            emailId: e.target.emailId.value,
            password: e.target.password.value,
            age: e.target.age.value
        }).then(data => {
            setUser(data);
        })
    }

  return (
    <div>
    


    

<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Online Movie Ticket Booking</title>
   
 
</head>
<body>
    <header>
        <img src="../img/Logo1.jpg" alt="Movie Time Logo" class="logo"/>

        <h1>Welcome to Movie Time</h1>
    </header>

    <nav>
        <a href="../Final Files/index2.html">Home</a>
        <a href="../Final Files/Register.html">Register</a>
        <a href="../Final Files/Movieshows.html">Movies</a>
        <a href="../Final Files/Movieshows.html">Theatres</a>
        <a href="../Final Files/Bookings.html">My Bookings</a>
        <a href="../Final Files/Login.html">Login</a>
    </nav>

    {/*<!- Register Section-->*/}

    {user ? <div class="alert alert-primary alert-dismissible fade show container " role="alert">
        <strong> Welcome {user.firstName}</strong>  You Have Registered Successfully!!!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div> : <></>}
    
    <div class="container" id="register">
        <h2>Register</h2>


        <form className="form-container"  onSubmit={submitHandler}>
            <label for="first-name">First Name:</label>
            <input type="text" id="first-name" placeholder="Enter your first name"
            name='firstName' 
            required/>
            
            <label for="last-name">Last Name:</label>
            <input type="text" id="last-name" placeholder="Enter your last name" 
            name='lastName'  required/>
            
            <label for="emailid">EmailId:</label>
            <input type="email" id="emailid" placeholder="Enter your Email Id"
            name='emailid' />
            
            <label for="age">Age:</label>
            <input type="number" id="age" placeholder="Enter your age" 
            name='age' required/>

            <label for="new-password">Password:</label>
            <input type="password" id="new-password" placeholder="Choose a password"
            name='password'/>
        
            <label for="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password"
            name='confirm-password' />
        
            <button id="register-btn" type="submit">Register</button>
            <p>Already have an account? <a href="../Final Files/Login.html">Login here</a></p>
        </form>
    </div>

    



    <script src="../MoviesTicket booking/script.js "></script>
    <footer>
        <p>&copy; 2025 Movie Time. All Rights Reserved.</p>
    </footer>

    <script src="../js/script.js"></script>
</body>
</html>

</div>
  )
}

export default Register
