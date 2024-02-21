

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

    return (

        <div className="contactform">

            <form className="form">

                <div className="form__info">

                    <div>
                        <label>
                            <input type="text" name="firstname" id="firstname" required placeholder="Votre prénom"/>
                        </label>
                    </div>

                    <div>
                        <label>
                            <input type="text" name="name" id="name" required placeholder="Votre nom"/>
                        </label>
                    </div>

                </div>

                <div className="form__info">

                    <div>
                        <label>
                            <input type="text" name="subject" id="subject" required placeholder="Le sujet de votre message"/>
                        </label>

                        <label>
                            <textarea name="message" id="message" required placeholder="Votre message"/>
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