import React, { useState, useEffect } from 'react';
import './App.css';
import { getAllReservations } from '../../APIcalls.js';
import ResList from '../ResList/ResList';
import Form from '../Form/Form';

const App = () => {
  const [allRes, setAllRes] = useState([]);
  const [error, setError] = useState('');



  useEffect(() => {
    getAllReservations(setAllRes)

  }, []);

  const addRes = (newRes) => {
    setAllRes([...allRes, newRes])
  }

  const deleteRes = (id) => {
    const filteredRes = allRes.filter(res => res.id !== id)
    setAllRes(filteredRes)
  }



  return (
    <div className="App">
      <h1 className="app-title">Turing Cafe Reservations</h1>
      <div className="resy-form">
        <Form addRes={addRes} />
      </div>

      <div className="resy-container">
        <ResList allRes={allRes} deleteRes={deleteRes}/>
      </div>
    </div>
  );
};

export default App;
