import Collapsable from "../../../_components/Collapsable/_index";

function Project(props){

    let data = props.data;

    return(

        <section id="project" className="project">

            <h2 className="project__title">Mes projets</h2>

            <div className="projectContent">

                <h3 className="projectContent__title">Formation Développeur web :</h3>
                
                {data.allProject.map((data, index) => 

                    <div key={index} className="projectContent__collapse">

                    <Collapsable 
                    title={data.titleProject}
                    data={data}
                    />
                    
                    </div>

                )}

            </div>

        </section>

    );

};

export default Project;