import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function Header(){

    const location = useLocation();
    let [isForm, setIsForm] = useState(false);

    useEffect(() => {

        if (location.pathname !== "/"){
            setIsForm(true);
        } else {
            setIsForm(false);
        }

    },[location]);

    return(

        <div id="header">

        { isForm ? (

            <div className="navbarBack">
                <Link to="/" className="navbarBack__link">Retour</Link>
            </div>

            ) : (
       
            <ul className="navbar">

                <li className="navbar__link">
                    <a href="#presentation">Présentation</a>
                </li>

                <li className="navbar__link">
                    <a href="#about">A propos de moi</a>
                </li>

                <li className="navbar__link">
                    <a href="#skill">Compétences</a>
                </li>

                <li className="navbar__link">
                    <a href="#project">Portfolio</a>
                </li>

                <li className="navbar__link">
                    <a href="#contact">Contact</a>
                </li>

            </ul>
            )}

        </div> 
        
    );

};

export default Header;