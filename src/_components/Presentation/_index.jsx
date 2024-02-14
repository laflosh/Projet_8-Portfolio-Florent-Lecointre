import profilPic from "../../assets/florent-lecointre.jpg";
import Formation from "../Formation/_index";

function Presentation(props){

    let dataPresentation = props.dataPresentation;
    let dataFormation = props.dataFormation;

    return(

        <section id="presentation" className="presentation">

            <h2 className="presentation__title">Présentation</h2>

            <div className="presentationContent">

                <img className="presentationContent__img" src={profilPic} title="Florent Lecointre" alt="Florent Lecointre"/>

                <div className="presentationContent__info">

                    <p className="presentationContent__infoName">{dataPresentation.name}</p>

                    <p className="presentationContent__infoAge">{dataPresentation.age}</p>

                    {dataPresentation.presentation.map((element, index) => 

                        <p key ={index} className="presentationContent__infoDescription">
                            {element}
                        </p>

                    )}

                </div>

                <Formation data={dataFormation}/>

            </div>

        </section>

    )

}

export default Presentation;