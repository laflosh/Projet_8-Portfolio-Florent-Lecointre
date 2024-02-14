

function Form(props){

    function handleClick(){
        if(props.getElementMail){

            let contentMail = props.getElementMail();
            let mail = `mailto:l_florent_l@hotmail.fr?subject=${contentMail[0].object}&body=${contentMail[0].message}`;

            window.open(mail);
        };
        
    };

    return (

        <section className="form">

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
                        <input type="text" name="object" id="object" required/>
                    </label>

                    <label>
                        Message :
                        <textarea name="message" id="message" required/>
                    </label>
                </div>

            </div>

 
            <button onClick={() => handleClick()}>
                Envoyer
            </button>

        </section>

    );

};

export default Form;