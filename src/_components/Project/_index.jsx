import Collapsable from "../Collapsable/_index";

function Project(){

    return(

        <section id="project" className="project">

            <h2 className="project__title">Mes projets</h2>

            <div className="projectContent">

                <h3 className="projectContent__title">Formation Développeur web :</h3>

                <div className="projectContent__collapse">
                    <Collapsable title="Sophie Bluel"/>
                </div>

                <div className="projectContent__collapse">
                    <Collapsable title="Kasa"/>
                </div>

                <div className="projectContent__collapse">
                    <Collapsable title="Mon vieux grimoire"/>
                </div>

            </div>

        </section>

    );

};

export default Project;