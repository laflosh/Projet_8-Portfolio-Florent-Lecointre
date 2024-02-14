

function Form(){

    return (

        <section className="form">

            <div className="form__info">

                <div>
                    <label for="firstname">Prénom :</label>
                    <input type="text" name="firstname" id="firstname" required/>
                </div>

                <div>
                    <label for="name">Nom :</label>
                    <input type="text" name="name" id="name" required/>
                </div>

            </div>
            
            <div className="form__info">

                <div>
                    <label for="object">Objet :</label>
                    <input type="text" name="object" id="object" required/>

                    <label for="message">Message :</label>
                    <textarea name="message" id="message" required/>
                </div>

            </div>


            <button>Envoyer</button>

        </section>

    );

};

export default Form;