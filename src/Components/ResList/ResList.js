import React from "react";
import './ResList.css'
import SingleRes from '../SingleRes/SingleRes';

const ResList = ({ allRes, deleteRes }) => {

    const mappedRes = allRes.map((res) => {
        return ( 
            <SingleRes 
                resData={res} 
                key={res.id} 
                deleteRes={deleteRes}/>
                )
            })

    if(!mappedRes.length) {
        return <p className="oops">Oops, my bad</p>
    }
            
return(
    <section className="res-container">
        {mappedRes}
    </section>
    )
};

export default ResList