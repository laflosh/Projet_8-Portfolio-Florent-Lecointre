import Form from "../../_components/Form/_index";
import { getElementMail } from "../../data/dataTools";

function ContactForm(){

    return(

        <div className="contactform">

            <h1 className="contactform__title">
                Remplissez ce formulaire pour me contacter par mail
            </h1>

            <p className="contactform__description">
                Je donnerai réponse à votre message dans les plus brefs délais
            </p>

            <Form getElementMail={() => getElementMail()}/>

        </div>

    );

};

export default ContactForm;