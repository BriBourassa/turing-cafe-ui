import React, { useState } from "react";


const Form = () => {
    const [newRes, setNewRes] = useState({
        id:Date.now(),
        name: '',
        date: '',
        time: '',
        number: ''
    })


    const handleSubmit = e => {
        e.preventDefault()
        const makeNewRes = {
            id: Date.now(),
            name: name,
            date: date,
            time: time,
            number: number
        }
        addRes(makeNewRes)
        clearInputs()
    }

    const clearInputs = () => {
        
    }



}



export default Form