import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate=useNavigate();
  return (
    <div>
        <header>
          <div className="header-container">
            <h3>Reports</h3>
            <button onClick={()=>navigate("/conversion-cost")}>back</button>
          </div>
        </header>
    </div>
  )
}

export default Header