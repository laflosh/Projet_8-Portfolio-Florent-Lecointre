import logoX from "../../../assets/logo-X.png";
import logoLinkedIn from "../../../assets/logo-linkedin.jpg";
import logoGithub from "../../../assets/logo-github.webp";

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

                <h3 className="contactContent__title">Pour me contacter</h3>

                <div className="wrapper">

                    <div>

                        <p>Sur mes réseaux :</p>

                        <a href="https://twitter.com/florent_l_" rel="noreferrer" target="_blank">
                            <img className="contactContent__img" src={logoX} title="Logo" alt="X"/>
                        </a>

                        <a href="https://www.linkedin.com/in/florent-lecointre-459530235/" rel="noreferrer" target="_blank">
                            <img className="contactContent__img" src={logoLinkedIn} title="Logo" alt="LinkedIn"/>
                        </a>

                        <a href="https://github.com/laflosh" rel="noreferrer" target="_blank">
                            <img className="contactContent__img" src={logoGithub} title="Logo" alt="Github"/>
                        </a>

                    </div>

                    <div>

                        <p>Par mail :</p>

                        <button onClick={handleClick}>
                            Contact par mail
                        </button>

                    </div>

                </div>

            </div>

        </section>

    )

}

export default Contact;