import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const [user, setUser ] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchUser = async () => {
    setLoading(true); 
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      console.log(data);
      setUser (data.results[0]);
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false); 
    }
  };

  const back = () => {
    navigate('/');
}

  return (
    <div className="user-details">
      <button onClick={fetchUser} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch User Details'}
      </button>
      {user && (
        <div className="user-card">
          <div className='innerdiv1'>
            <img src={user.picture.large} alt="User " />
            <h2>{`${user.name.first} ${user.name.last}`}</h2> <br />
            <p> {user.gender}</p><br />
          </div>
          <div className='innerdiv2'>
            <p><strong>Email: </strong> {user.email}</p><br />
            <p><strong>Phone: </strong> {user.phone}</p><br />
            <p><strong>Address: </strong> {`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.postcode}`}</p>
          </div>
        </div>
      )}
       <div className="btns">
              <button onClick={back}>Back To Home</button>
            </div>
    </div>
  );
};

export default UserDetails;