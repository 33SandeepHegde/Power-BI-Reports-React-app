import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate=useNavigate();
  return (
    <div class="home_container">
        <h2>Power BI Reports:</h2>
        <div class="post-grid">
    <button class="post-button" onClick={()=>navigate("/conversion-cost")}>Conversion Cost</button>
    <button class="post-button" onClick={()=>navigate("/kaizen")}>Kaizen</button>
    <button class="post-button"onClick={()=>navigate("/production")}>Production</button>
    <button class="post-button" onClick={()=>navigate("/copq")}>COPQ</button>
    <button class="post-button" onClick={()=>navigate("/otd")}>OTD</button>
    <button class="post-button" onClick={()=>navigate("/safety")}>Safety</button>
  </div>
    </div>
  )
}

export default Home