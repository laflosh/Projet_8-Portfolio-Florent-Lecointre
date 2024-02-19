import { useState, useRef } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/fontawesome-free-solid";
import Carrousel from "../Carrousel/_index";

/**
 * 
 * @returns 
 */
function Collapsable(props){

    const title = props.title;
    let data = props.data;

    let [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    const wrapperRef = useRef(null);
    const contentRef = useRef(null);

    return (

        <div className="collapsable">

            <div className="title" onClick={toggle} >
                <p>{title}</p>
                <FontAwesomeIcon icon={faChevronUp} className={ "icon " + (isOpen ? "icon-over" : "")} />
            </div>

            <div 
                ref={wrapperRef} 
                className={"content " + (isOpen ? "content-over" : "")}
                style={isOpen ? { height: wrapperRef.current.scrollHeight + "px" } : { height: "0px" }}
            >
                <div
                    className="content__wrapper"
                    ref={contentRef} 
                    style={{ top: "-" + (contentRef.current ? contentRef.current.offsetHeight : 100) + "px" }} 
                >
                    <Carrousel images={data.imageUrl}/>

                    <p className="content__title">{data.title}</p>

                    <p className="content__description">{data.description}</p>

                    <ul className="content__liste">
                        {data.mission.map((element, index) => 
                            <li key={index}>{element}</li>
                        )}
                    </ul>

                    <p className="content__titleProbleme">Problématiques rencontrés :</p>

                    <ul className="content__liste">
                        {data.problemes.map((element, index) => 
                            <li key={index}>{element}</li>
                        )}
                    </ul>

                    <a className="content__link" href={data.codeUrl}>Lien vers le repositorie</a>

                </div>

            </div>

        </div>

    );

};

export default Collapsable;