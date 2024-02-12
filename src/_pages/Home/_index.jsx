import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpload} from "@fortawesome/fontawesome-free-solid";
import Presentation from "../../_components/Presentation/_index";
import About from "../../_components/About/_index";
import Skills from "../../_components/Skills/_index";
import Project from "../../_components/Project/_index";
import Contact from "../../_components/Contact/_index";
import { useNavigate } from "react-router";

function Home() {

    const navigate = useNavigate();

    return (

        <>

            <section className="banner">

                <div className="banner__content">

                    <h1>
                        Florent Lecointre
                        <div className="underline"></div>
                    </h1>
                    <p>Dévellopeur web / Front-End</p>

                    <button>
                        Mon CV
                        <FontAwesomeIcon icon={faUpload} />
                    </button>

                </div>

            </section>

            <Presentation/>

            <About/>

            <Skills/>

            <Project/>

            <Contact onClickHandler={() => navigate(`/contactform`)}/>

        </>

    );

};

export default Home;