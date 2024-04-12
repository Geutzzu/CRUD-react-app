import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [constructor, setConstructor] = useState(null);
  const { constructorId: constructorId } = useParams(); /// nsh de unde vine typoul

  console.log(useParams());

  const location = useLocation();


  useEffect(() => {
    if (constructorId) {
      // Fetch data from API
      fetch(`http://localhost:5500/drivers/${constructorId}`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(drivers => setDrivers(drivers))
      .catch(error => console.error('Error fetching data:', error));
    }
  }, [constructorId]);

  useEffect(() => {
    fetch(`http://localhost:5500/getConstructor/${constructorId}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(constructor => setConstructor(constructor)) 
    .catch(error => console.error('Error fetce hing data:', error));
  }, [constructorId]);


console.log(constructor);

  return(
    <div>
      <h2>Drivers</h2>
      {drivers.map(driver => (
        <div key={driver._id.$oid}>
          <h3>{driver.firstName} {driver.lastName}</h3>
          <p>Age: {driver.age}</p>
          <p>Team: {}</p>
          <p>Nationality: {driver.nationality}</p>
        </div>
      ))}
    </div>
  );
}

export default Drivers;