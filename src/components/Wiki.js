// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=cars

import { useEffect, useState } from "react";
import axios from 'axios';


const Wiki = ()=>{


    
    

    const [term, setTerm] = useState('programming');
    const [result, setResult ]= useState([]);

    useEffect( ()=>{
        const data = async()=>{
            const d= await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${term}`);
            setResult(d.data.query.search);
            // console.log(d.data.query.search);
        }
        if(term){
        data();
        }
        // console.log(data);
    }, [term])
   

    const renderedResults= result.map( r =>{
        const link = `https://en.wikipedia.org/wiki/${r.title}`;
        return(
            <div  key= {r.pageid}className="item">
                <a href={link} style={{textDecoration:'none', color:'inherit'} }>
                <div className="content" style={{cursor:'pointer'}}>
                    <div className="header">
                        {r.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: r.snippet}} />
                
                </div>
                </a>
            </div>
        )
    })
    return(
        <div>        <div className="ui form">
            <div className="field">
                <label>Enter Search Item</label>
                <input value={term} onChange={e => setTerm(e.target.value)} className="input"/>
            </div>

        </div>
        <div className="ui celled list">
            {renderedResults}
        </div>
        </div>

    )
}

export default Wiki;