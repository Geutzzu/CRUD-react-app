import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Drivers from './pages/Drivers.js';
import AddDriverForm from './pages/AddDriverForm.js';
import EditDriverForm from './pages/EditDriverForm.js';
import PlayerStats from './pages/PlayerStats.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/> /// Constructors 
  },
  {
    path: "/drivers/:constructorId",
    element: <Drivers/>
  },
  {
    path: "/addDriver",
    element: <AddDriverForm/>
  },
  {
    ///path: "/editDriver/:driverId",
    ///element: <EditDriverForm/> NU CONTIN NIMIC ACUM
  },
  {
    ///path: "/playerStats/:driverId",
    ///element: <PlayerStats/> NU CONTIN NIMIC ACUM (NU AU EXPORT)
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/// ! CODUL PROFULUI 

/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Players from './pages/Players';
import NewPlayerForm from './pages/NewPlayerForm';
import EditPlayerForm from './pages/EditPlayerForm';
import Goals from './pages/Goals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/players/:teamId",
    element: <Players/>
  },
  {
    path: "/addPlayer",
    element: <NewPlayerForm/>
  },
  {
    path: "/editPlayer/:playerId",
    element: <EditPlayerForm/>
  },
  ,
  {
    path: "/getGoals/:playerId",
    element: <Goals/>
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/