import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Display = () => {
    const location = useLocation();
    const { name, phone, email, dob, address } = location.state;
    const navigate = useNavigate();

    const back = () => {
        navigate('/');
    }

    return (
       <div className="details-container">
          <div className="details">
            <h2>Submitted Details</h2><br /><br />
            <p><strong>Name:</strong> {name}</p><br />
            <p><strong>Phone Number:</strong> {phone}</p><br />
            <p><strong>Email:</strong> {email}</p><br />
            <p><strong>Date of Birth:</strong> {dob}</p><br />
            <p><strong>Address:</strong> {address}</p><br />

            <div className="btns">
              <button onClick={back}>Back To Home</button>
            </div>
          </div>
          
       </div>
    );
};

export default Display;