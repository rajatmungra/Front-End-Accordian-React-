import { Link } from "react-router-dom";



const Header = ()=>{
    return(
       
        <div className="ui secondary pointing menu">
            <Link to='/' className="item">
                Accordian
            </Link>
            <Link to='/wiki' className="item">
                Wikipedia
            </Link>
            <Link to='/dropdown' className="item">
                Dropdown
            </Link>
            <Link to='/translate' className="item">
                Translate
            </Link>
        </div>
        
    )
}

export default Header;