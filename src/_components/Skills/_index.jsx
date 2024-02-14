

function Skills(props){

    let data = props.data;

    return(

        <section id="skill" className="skills">

            <h2 className="skills__title">Mes Compétences</h2>

            <div className="skillsElement">

                {data.skills.map((element, index) => 

                    <div key={index} className="skillsContent">

                        <img className="skillsContent__img" src={element.imageUrl} title="Logo" alt={element.title}/>

                        <h3 className="skillsContent__title">{element.title}</h3>
                        <ul className="skillsContent__description">
                            {element.competence.map((competence, index) =>
                                <li key={index}>{competence}</li>
                            )}
                        </ul>

                    </div>

                )}

            </div>

        </section>

    );

};

export default Skills;