import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpload} from "@fortawesome/fontawesome-free-solid";
import Presentation from "./Presentation/_presentation";
import About from "./About/_about";
import Competences from "./Competences/_competences";
import Projets from "./Projets/_projets";
import Contact from "./Contact/_contact";
import { useNavigate } from "react-router";
import { getDataAbout, getDataCompetence, getDataFormation, getDataPresentation, getDataProject } from "../../data/dataTools";
import { Link } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    let dataPresentation = getDataPresentation();
    let dataFormation = getDataFormation();
    let dataAbout = getDataAbout();
    let dataCompetences = getDataCompetence();
    let dataProjets = getDataProject();

    return (

        <>

            <section className="banner">

                <div className="banner__content">

                    <h1>
                        Florent Lecointre
                        <div className="underline"></div>
                    </h1>
                    <p>Développeur web / Front-End</p>

                    <Link
                    className="download"
                    to="files/florent-lecointre-cv.pdf"
                    download="florent-lecointre-cv"
                    target="_blank"
                    rel="noreferrer"
                    >
                        Mon CV
                        <FontAwesomeIcon icon={faUpload} />
                    </Link>

                </div>

            </section>

            <Presentation 
            dataPresentation={dataPresentation}
            dataFormation={dataFormation}
            />

            <About data={dataAbout}/>

            <Competences data={dataCompetences}/>

            <Projets data={dataProjets}/>

            <Contact onClickHandler={() => navigate(`/contactform`)}/>

        </>

    );

};

export default Home;