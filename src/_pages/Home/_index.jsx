import backgrounbImg from "../../assets/img-bannière-1.jpg";

function Home() {

    return (

        <section className="banner">

            {/*<img className="banner__img" src={backgrounbImg} title="Image bannière" alt="Bannière du site"/>*/}

            <div className="banner__content">

                <h1>
                    Florent Lecointre
                    <div className="underline"></div>
                </h1>
                <p>Dévellopeur web / Front-End</p>

                <button>Mon CV</button>

            </div>

        </section>

    );

};

export default Home;