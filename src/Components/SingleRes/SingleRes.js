import React from "react";
import './SingleRes.css'


const SingleRes = ({ resData, deleteRes }) => {
    const {id, name, date, time, number} = resData

    return (
        <div className="single-card" id={id}>
          <p>{name}</p>
          <p>{date}</p>
          <p>{time}</p>
          <p>Number of Guests: {number}</p>
          <button onClick={() => deleteRes(id)}>Cancel</button>
        </div>
    )

}

export default SingleRes