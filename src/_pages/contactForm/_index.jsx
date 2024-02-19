

function ContactForm(){

    function getElementMail(){

        let firstname = document.getElementById("firstname");
        let name = document.getElementById("name");
        let subject = document.getElementById("subject");
        let message = document.getElementById("message");
        message = message.value;

        message = message.replace(/\r\n|\r|\n/g, "%0D%0A");
        
        return {
            "subject" : subject.value,
            "message" : `${message}%0A%0A${firstname.value} ${name.value}`
        }
    };

    function handleClick(event){

        event.preventDefault();

        let contentMail = getElementMail();
        let mail = `mailto:l_florent_l@hotmail.fr?subject=${contentMail.subject}&body=${contentMail.message}`;

        window.location.href = mail;
        
    };

    return(

        <div className="contactform">

            <h1 className="contactform__title">
                Remplissez ce formulaire pour me contacter par mail
            </h1>

            <p className="contactform__description">
                Je donnerai réponse à votre message dans les plus brefs délais
            </p>

            <form className="form">

                <div className="form__info">

                    <div>
                        <label>
                            Prénom :
                            <input type="text" name="firstname" id="firstname" required/>
                        </label>
                    </div>

                    <div>
                        <label>
                            Nom :
                            <input type="text" name="name" id="name" required/>
                        </label>
                    </div>

                    </div>

                    <div className="form__info">

                    <div>
                        <label>
                            Objet :
                            <input type="text" name="object" id="subject" required/>
                        </label>

                        <label>
                            Message :
                            <textarea name="message" id="message" required/>
                        </label>
                    </div>

                </div>


                <button onClick={(event) => handleClick(event)}>
                    Envoyer
                </button>

            </form>

        </div>

    );

};

export default ContactForm;