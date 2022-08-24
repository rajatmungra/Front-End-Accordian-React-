import { useEffect, useRef, useState } from "react";


const Dropdown = ({color, onSelectedChange , temp , selected})=>{

    const[open, setOpen]= useState(false);
    const ref = useRef();

    useEffect(()=>{
        const onBodyClick = (event)=>{
            
            if(ref  && ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick)
        return()=>{
            // console.log('hi');
            document.body.removeEventListener('click', onBodyClick);
        }
    }, [])

    const elements = color.map( c =>{
        if(c.value === selected.value){
            return null;
        }
        return(
            <div onClick={()=> onSelectedChange(c)} className="item" key={c.value}>
                {c.lable}
            </div>
        )
    });

    // console.log(ref.current);
    return(
        <div ref={ref}className="ui form">
            <div className="field">
                <label className='lable'>Select a {temp}</label>
                <div onClick={()=> setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active':''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.lable}</div>
                    <div className={`menu ${open ? 'visible transition': ''}`}>
                        {elements}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;