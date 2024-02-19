import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

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
                    <ScrollLink to="presentation" spy={true} smooth={true} duration={500}>
                        Présentation
                    </ScrollLink>
                </li>

                <li className="navbar__link">
                    <ScrollLink to="about" spy={true} smooth={true} duration={500}>
                        A propos
                    </ScrollLink>
                </li>

                <li className="navbar__link">
                    <ScrollLink to="skill" spy={true} smooth={true} duration={500}>
                        Compétences
                    </ScrollLink>
                </li>

                <li className="navbar__link">
                    <ScrollLink to="project" spy={true} smooth={true} duration={500}>
                        Portfolio
                    </ScrollLink>
                </li>

                <li className="navbar__link">
                    <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
                        Contact
                    </ScrollLink>
                </li>

            </ul>
            )}

        </div> 
        
    );

};

export default Header;