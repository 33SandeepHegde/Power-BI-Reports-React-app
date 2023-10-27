import React from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import back from '../components/image_2023_10_27T05_56_44_254Z.png'
const Header = () => {
  const location = useLocation();
  const navigate=useNavigate();
  return (
    <div>
        <header>
          <div className="header-container">
            <h3>Reports</h3>
            {location.pathname !== '/' && (
        <button id="back" ><img data-bs-toggle="tooltip" data-bs-placement="top" title="Back" id="backimg" onClick={()=>navigate("/")}   src={back}/> </button>
        )}
           
          </div>
        </header>
    </div>
  )
}

export default Header