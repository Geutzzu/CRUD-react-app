import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

function Constructors() {
    const [constructors, setConstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5500/getConstructors', {
            method: 'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(constructors => setConstructors(constructors))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    return(
        <div>
        <h2>My Constructors</h2>
        <table className="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Championships</th>
                <th>Team Principal</th>
                <th>Principal Age</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {constructors.map(item => (
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.constructorsChampionships}</td>
                    <td>{item.teamPrincipal.firstName} {item.teamPrincipal.lastName}</td>
                    <td>{item.teamPrincipal.age}</td>
                    <td> 
                    <Link to={`/drivers/${item._id}`}>
                        View Drivers 
                    </Link>
                    </td> 
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default Constructors;