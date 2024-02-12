import streatLuge from "../../assets/luge.jpg";
import unityPic from "../../assets/logo-unity.jpg";

function About(){

    return(

        <section id="about" className="about">

            <h2 className="about__title">A propos de moi</h2>

            <div className="aboutContent">

                <img className="aboutContent__firstImg" src={streatLuge} title="Photo" alt="Florent en Streatluge"/>

                <p className="aboutContent__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>

            </div>

            <div className="aboutContent">

                <p className="aboutContent__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>

                <img className="aboutContent__secondImg" src={unityPic} title="Photo" alt="Logo du logiciel Unity3D"/>

            </div>

        </section>

    );

};

export default About;