

function Formation(props){

    let data = props.data;

    return(

        <section className="formation">
            
            <h3>Formation</h3>
            
            {data.formation.map((element, index) =>

                <div key={index}>

                    <p className="formation__title">{element.degree}</p>
                    <p className="formation__description">{element.description}</p>
                    <p className="formation__date">{element.year}</p>

                </div>

            )}

        </section>

    )

}

export default Formation;