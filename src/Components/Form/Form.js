import React, { useState } from "react";


const Form = ({ addRes }) => {
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

        <button onClick={handleSubmit}>Make Reservation</button>
        </form>
    )



}



export default Form