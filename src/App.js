import React from 'react';
import NavBar from './Components/NavBar'
import About from './Components/About'
import Video from './Components/Video'
import Services from './Components/Services'
import Counter from './Components/Counter'
import ListButton from './Components/ListButton'
import Portfolio from './Components/Portfolio'
import NavImage from './Components/NavImage'
import Progress from './Components/Progress'
import Experience from './Components/Experiences'
import Numbers from './Components/Numbers'
import Powerful from './Components/Powerful'
import Creative from './Components/Creatuve'
import Blog from './Components/blog/Blog'
import Carousel from './Components/carousel/Carousel'
import PeopleSay from './Components/wps/PeopleSay'
import Form from './Components/form/Form'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'


function App() {
    return (
        <div>
            <section className="imagen" id="home">
                <NavBar />
                <div className="button d-flex justify-content-center">
                    <button type="button" className="but btn btn-outline-dark rounded-circle ">&darr;</button>
                </div>
            </section>
            <section id="about">
                <About />
            </section>
            <section className="tree">
                <Video />
            </section>
            <section className="four pb-3" id="services">
                <Services />
            </section>
            <section>
                <Counter />
            </section>
            <section className="four">
                <ListButton />
            </section>
            <section id="work">
                <Portfolio />
            </section>
            <section>
                <NavImage />
            </section>
            <section>
                <br></br>
                <Progress />
            </section>
            <section>
                <Experience />
            </section>
            <section>
                <Numbers />
            </section>
            <section className="fond">
                <Powerful />
            </section>
            <section className="secCreative" id="team">
                <Creative />
            </section>
            <section className="blog" id="blog">
                <Blog />
            </section>
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
