import React, {useState} from 'react';


const Table = ({data})  =>{

    const [evidence, setEvidence] = useState(data);
    return(
        <div>
            <h1>Results</h1>
            <table>
            <tr>
                <th>{evidence[0].sentence}</th>
            </tr>
            <tr>
                <td>{evidence[1].sentence}</td>
            </tr>
       
            </table>            
        </div>
    )


};


export default Table;
