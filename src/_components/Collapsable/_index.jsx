import { useState, useRef } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/fontawesome-free-solid";

/**
 * 
 * @returns 
 */
function Collapsable(props){

    const title = props.title;

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
                    ref={contentRef} 
                    style={{ top: "-" + (contentRef.current ? contentRef.current.offsetHeight : 100) + "px" }} 
                >
                    {props.children}
                </div>
            </div>

        </div>

    )

}

export default Collapsable;