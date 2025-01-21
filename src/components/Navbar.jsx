import React from 'react';
import Main from './Main';

function Navbar() {
  return (
    <div>
      <header>
        <img src="" alt="Movie Time Logo" className="logo"></img>
        <h1>Welcome to Movie Time</h1>
      </header>
      <nav>
        <a href="../Final Files/index2.html">Home</a>
        <a href="../Final Files/Register.html">Register</a>
        <a href="../Final Files/Movieshows.html">Movies</a>
        <a href="../Final Files/Movieshows.html">Theatres</a>
        <a href="../Final Files/Bookings.html">My Bookings</a>
        <a href="../Final Files/Profile.html">Profile</a>
        <a href="../Final Files/Liveshowtimes.html">Live Showtimes</a>
        <a href="../Final Files/Login.html">Login</a>
      </nav>
    </div>
  );
}

export default Navbar;
