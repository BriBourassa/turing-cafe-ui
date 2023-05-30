import React, { useState, useEffect } from 'react';
import './App.css';
import { getAllReservations } from '../../APIcalls.js';
import ResList from '../ResList/ResList';
import Form from '../Form/Form';

const App = () => {
  const [allRes, setAllRes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllReservations(setAllRes, setError)
  }, []);

  const addRes = (newRes) => {
    setAllRes([...allRes, newRes])
  }

  const deleteRes = (id) => {
    console.log('hi!')
    const filteredRes = allRes.filter(res => res.id !== id)
    setAllRes(filteredRes)
  }

  const postNewRes = async (newRes) => {
    const url = 'http://localhost:3001/api/v1/reservations'
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(newRes),
        headers: {
          'Content-type': 'application/json'
        }
      });
      const postedRes = await response.json()
      setAllRes([...allRes, postedRes])
    } catch(error) {
      setError(error.message)
    }
  }

  return (
    <div className="App">
      <h1 className="app-title">Turing Cafe Reservations</h1>
      <div className="resy-form">
        <Form addRes={addRes} postNewRes={postNewRes}/>
      </div>
      <div className="resy-container">
        <ResList allRes={allRes} deleteRes={deleteRes}/>
      </div>
    </div>
  );
};

export default App;
