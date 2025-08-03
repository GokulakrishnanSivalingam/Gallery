import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../src/painting.json';
import { Link } from 'react-router-dom';
import './Styles/Home.css';

function Home() {
  return (
    <div className="welcome-container">
      
      <div className="welcome-content">
        <h1 className="fade-in-title">Welcome to Logendiran's Art Gallery</h1>
        <p className="fade-in-subtitle">Where creativity meets the canvas</p>
        <Link to="/artwork" className="explore-button">
          Explore the Gallery
        </Link>
      </div>
      <div className="welcome-animation">
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjV4NGxnMWtmaXgxbGo5bHVxYnV4NTJleGc1YWNsOXI4NzVncmgxbiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/LSRQac4aKmgkN5orrL/giphy.webp" alt="" />
      </div>
    </div>
  );
}

export default Home;
