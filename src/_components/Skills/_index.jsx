import logoFront from "../../assets/logo-front-end.png";
import logoBack from "../../assets/logo-back-end.png";
import logoTool from "../../assets/logo-outils.png";

function Skills(){

    return(

        <section id="skill" className="skills">

            <h2 className="skills__title">Mes Compétences</h2>

            <div className="skillsElement">

                <div className="skillsContent">

                    <img className="skillsContent__img" src={logoFront} title="Logo" alt="Logo de ReactJs"/>

                    <h3 className="skillsContent__title">Front-End</h3>
                    <p className="skillsContent__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    </p>

                </div>

                <div className="skillsContent">

                    <img className="skillsContent__img" src={logoBack} title="Logo" alt="Logo de NodeJs"/>

                    <h3 className="skillsContent__title">Back-End</h3>
                    <p className="skillsContent__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    </p>

                </div>

                <div className="skillsContent">

                    <img className="skillsContent__img" src={logoTool} title="Logo" alt="Logo Outils"/>

                    <h3 className="skillsContent__title">Outils</h3>
                    <p className="skillsContent__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    </p>

                </div>

            </div>

        </section>

    );

};

export default Skills;