import React, { useState } from "react";
import './Form.css'

const Form = ({ addRes, postNewRes }) => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        number: 0
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const handleSubmit = e => {
        e.preventDefault()
        const newRes = {
            id:Date.now(),
            ...formData
        }
        addRes(newRes)
        postNewRes(newRes)
        clearInputs()
    }

    const clearInputs = () => {
        setFormData({
            name: '',
            date: '',
            time: '',
            number: 0
        })
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
              <input
                type="text"
                placeholder="Date"
                name="date"
                value={formData.date}
                onChange={handleChange}
            />
              <input
                type="text"
                placeholder="Time"
                name="time"
                value={formData.time}
                onChange={handleChange}
            />
              <input
                type="text"
                placeholder="Number"
                name="number"
                value={formData.number}
                onChange={handleChange}
            />
        <button onClick={handleSubmit}>Make Reservation</button>
        </form>
    )
};

export default Form