import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const location = useLocation();
  const driverIds = location.state.driverIds;

  useEffect(() => {
    // Fetch data from API
    Promise.all(driverIds.map(id =>
      fetch(`http://localhost:5500/getDriver/${id.$oid}`, {
        method: 'GET'
      })
      .then(response => response.json())
    ))
    .then(drivers => setDrivers(drivers))
    .catch(error => console.error('Error fetching data:', error));
  }, [driverIds]);

  return(
    <div>
      <h2>Drivers</h2>
      <select>
        {drivers.map(driver => (
          <option key={driver._id.$oid} value={driver._id.$oid}>
            {driver.firstName} {driver.lastName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Drivers;