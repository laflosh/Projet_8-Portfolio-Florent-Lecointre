import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpload} from "@fortawesome/fontawesome-free-solid";
import Presentation from "../../_components/Presentation/_index";
import About from "../../_components/About/_index";
import Skills from "../../_components/Skills/_index";
import Project from "../../_components/Project/_index";
import Contact from "../../_components/Contact/_index";
import { useNavigate } from "react-router";
import { getDataAbout, getDataCompetence, getDataFormation, getDataPresentation, getDataProject } from "../../data/dataTools";

function Home() {

    const navigate = useNavigate();

    let dataPresentation = getDataPresentation();

    let dataFormation = getDataFormation();

    let dataAbout = getDataAbout();

    let dataCompetence = getDataCompetence();

    let dataProject = getDataProject();

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

            <Presentation 
            dataPresentation={dataPresentation}
            dataFormation={dataFormation}
            />

            <About data={dataAbout}/>

            <Skills data={dataCompetence}/>

            <Project/>

            <Contact onClickHandler={() => navigate(`/contactform`)}/>

        </>

    );

};

export default Home;