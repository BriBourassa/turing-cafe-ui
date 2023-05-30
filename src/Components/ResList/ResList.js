import React from "react";
import './ResList.css'
import SingleRes from '../SingleRes/SingleRes';


const ResList = ({ allRes, deleteRes }) => {
// console.log(allRes, 'line 7')
    const mappedRes = allRes.map((res) => {
        return ( 
            <SingleRes 
                resData={res} 
                key={res.id} 
                deleteRes={deleteRes}/>
                )
            })
            // console.log(mappedRes, 'mapped!')

return(
    <section className="res-container">
        
        {mappedRes}
    </section>
)

}

export default ResList