import logo from "../../assets/404-logo.svg";

function Error(){

    return(

        <div className="error">

            <img className="error__img" src={logo} title="logo" alt="Erreur 404"/>

            <p className="error__content">
                La page que vous cherchez n'éxiste pas<br/>Retournez à la page principal avec le bouton "Retour"
            </p>

        </div>


    );

};

export default Error;