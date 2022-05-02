import React, {useState, useEffect} from 'react';


const Table = ({data})  =>{

    const [evidence, setEvidence] = useState(data);

    useEffect(()=>{
        setEvidence(data)
    },[data])
    
    return(
        <div>
            <h1>Results</h1> 

            {evidence.length > 0 ? (<h1>{evidence[0].sentence}</h1>) :("")}
        </div>
    )


};


export default Table;
