

function Form(){

    return (

        <section className="form">

            <div className="form__info">

                <div>
                    <label for="firstname">Prénom :</label>
                    <input type="text" name="firstname" required/>
                </div>

                <div>
                    <label for="name">Nom :</label>
                    <input type="text" name="name" required/>
                </div>

            </div>

            <label for="object">Objet :</label>
            <input name="object" required/>

            <label for="message">Message :</label>
            <textarea name="message" required/>

            <button>Envoyer</button>

        </section>

    );

};

export default Form;