import unityPic from "../../../assets/logo-unity.jpg";

function About(props){

    let data =props.data;

    return(

        <section id="about" className="about">

            <h2 className="about__title">A propos de moi</h2>

            <div className="aboutContent">

            <iframe className="aboutContent__firstImg" src="https://www.youtube.com/embed/tHmMqfP9LRE?playlist=tHmMqfP9LRE&autoplay=1&mute=1&loop=1" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>

                <p className="aboutContent__description">
                    {data.about[0]}
                </p>

            </div>

            <div className="aboutContent">

                <p className="aboutContent__description">
                    {data.about[1]}
                </p>

                <img className="aboutContent__secondImg" src={unityPic} title="Photo" alt="Logo du logiciel Unity3D"/>

            </div>

        </section>

    );

};

export default About;