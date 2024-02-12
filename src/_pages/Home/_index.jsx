import Presentation from "../../_components/Presentation/_index";
import About from "../../_components/About/_index";

function Home() {

    return (

        <>

            <section className="banner">

                <div className="banner__content">

                    <h1>
                        Florent Lecointre
                        <div className="underline"></div>
                    </h1>
                    <p>Dévellopeur web / Front-End</p>

                    <button>Mon CV</button>

                </div>

            </section>

            <Presentation/>

            <About/>

        </>

    );

};

export default Home;