import React from 'react';
import NavBar from './Components/navbar/NavBar'
import About from './Components/about/About'
import Video from './Components/Video'
import Services from './Components/services/Services'
import Counter from './Components/counter/Counter'
import ListButton from './Components/listbutton/ListButton'
import Portfolio from './Components/portfolio/Portfolio'
import NavImage from './Components/portfolio/NavImage'
import Progress from './Components/progressbar/Progress'
import Experience from './Components//experiences/Experiences'
import Numbers from './Components/Numbers'
import Powerful from './Components/Powerful'
import Creative from './Components/creative/Creative'
import Blog from './Components/blog/Blog'
import Carousel from './Components/carousel/Carousel'
import PeopleSay from './Components/wps/PeopleSay'
import Form from './Components/form/Form'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import { Parallax } from "react-parallax";
import background1 from './background1.png'
import bgTriang from './bgTriang.jpg'
import back from './back.jpg'

function App() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <Parallax bgImage={background1} className="parallax1" strength={850} >

                <section className="imagen" id="home">

                </section>
            </Parallax>
            <section id="about">
                <About />
            </section>
            <Parallax bgImage={bgTriang} className="parallax1" strength={500} >
                <section className="tree">
                    <Video />
                </section>
            </Parallax>
            <section className="four pb-3" id="services" >
                <Services />
            </section>
            <section className="counter">
                <Counter />
            </section>
            <section className="four">
                <ListButton />
            </section>
            <section id="work" className="work">
                <Portfolio />
            </section>
            <section className="navIma">
                <NavImage />
            </section>
            <section className="progre">
                <Progress />
            </section>
            <section className="experience">
                <Experience />
            </section>
            <section>
                <Numbers />
            </section>
            <Parallax bgImage={back} className="parallax1" strength={500} >
                <section >
                    <Powerful />
                </section>
            </Parallax>
            <section className="secCreative" id="team">
                <Creative />
            </section>
            {/*
            <section className="blog" id="blog">
                <Blog />
            </section>
           */}
            <section className="carousel" id="clients">
                <Carousel />
            </section>
            <section className="pb-5" >
                <PeopleSay />
            </section >
            <section className="form" id="contact">
                <Form />
            </section>
            <section className="contact">
                <Contact />
            </section>
            <footer className="footer" >
                <Footer />
            </footer>
        </div>

    );
}

export default App;
