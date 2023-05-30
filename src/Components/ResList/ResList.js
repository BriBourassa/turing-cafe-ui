import React from "react";
import './ResList.css'
import SingleRes from '../SingleRes/SingleRes';


const ResList = ({ allRes }) => {

    const mappedRes = allRes.map((res) => {
        return <SingleRes resData={res} key={res.id}/>
    })

return(
    <section className="res-container">
        
        {mappedRes}
    </section>
)

}

export default ResList