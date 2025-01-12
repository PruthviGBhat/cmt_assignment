import React from 'react'
import { useNavigate } from 'react-router-dom';
import cmtlogo from '../images/cmtlogo.jpeg';

const Home = () => {

  const navigate = useNavigate();
  const handleFormClick = () => {
    navigate('/form'); 
  };

  const handleApiClick = () => {
    navigate('/UserDetail');
  };

  return (
    <>
     <div className='logo'>
      <img src={cmtlogo} alt="" />
    </div>
     <div className="homepage">
     <div class="btns">
        <button  onClick={handleFormClick}>Form</button>
        <button onClick={handleApiClick}>API</button>
      </div>
     </div>
    </>
  )
}

export default Home
