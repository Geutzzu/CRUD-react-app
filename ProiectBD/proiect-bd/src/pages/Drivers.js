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
    if (constructorId) {
    fetch(`http://localhost:5500/getConstructor/${constructorId}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(constructor => setConstructor(constructor)) 
    .catch(error => console.error('Error fetce hing data:', error));
  }
  }, [constructorId]);


console.log(constructor);

return(
  <div>
    <h2>Drivers</h2>
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Nationality</th>
          <th>Stats</th>
        </tr>
      </thead>
      <tbody>
      {drivers.map(driver => (
        <tr key={driver._id.$oid}>
          <td>{driver.firstName}</td>
          <td>{driver.lastName}</td>
          <td>{driver.age}</td>
          <td>{driver.nationality}</td>
          <td>
            <details>
              <summary></summary>
              <ul>
                {Object.keys(driver.stats).map((statKey) => (
                  <li key={statKey}>
                    {`${statKey}: ${driver.stats[statKey]}`}
                  </li>
                ))}
              </ul>
            </details>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
    <Link to="/">
      <button className="button">Back to Constructors</button>
    </Link>
  </div>
);
}

export default Drivers;