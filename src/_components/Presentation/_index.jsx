import profilPic from "../../assets/florent-lecointre.jpg";
import Formation from "../Formation/_index";

function Presentation(){

    return(

        <section id="presentation" className="presentation">

            <h2 className="presentation__title">Présentation</h2>

            <div className="presentationContent">

                <img className="presentationContent__img" src={profilPic} title="Florent Lecointre" alt="Florent Lecointre"/>

                <div className="presentationContent__info">

                    <p className="presentationContent__infoName">Florent Lecointre</p>

                    <p className="presentationContent__infoAge">Age</p>

                    <p className="presentationContent__infoDescription">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>

                    <p className="presentationContent__infoDescription">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>

                </div>

                <Formation/>

            </div>

        </section>

    )

}

export default Presentation;