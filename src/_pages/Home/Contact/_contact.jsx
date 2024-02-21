import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/fontawesome-free-solid";

function Contact(props){

    function handleClick(){
        if(props.onClickHandler){
            props.onClickHandler();
        };
    };

    return(

        <section id="contact" className="contact">

            <h2 className="contact__title">Contact</h2>

            <div className="contactContent">

                <div className="wrapper">


                    <div>

                        <a href="https://twitter.com/florent_l_" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faXTwitter} className="contactContent__svg" />
                        </a>

                        <a href="https://www.linkedin.com/in/florent-lecointre-459530235/" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn} className="contactContent__svg" />
                        </a>

                    </div>

                    <div>

                        <a href="https://github.com/laflosh" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="contactContent__svg"/>
                        </a>

                        <a href="#">
                            <FontAwesomeIcon icon={faEnvelope} className="contactContent__svg" onClick={handleClick} />
                        </a>

                    </div>
                
                </div>

            </div>

        </section>

    )

}

export default Contact;