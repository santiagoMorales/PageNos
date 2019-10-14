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

function App() {
    return (
        <div>
            <section className="imagen">
                <NavBar />
                <div className="button d-flex justify-content-center">
                    <button type="button" className="but btn btn-outline-dark rounded-circle ">&darr;</button>
                </div>
            </section>
            <section>
                <About />
            </section>
            <section className="tree">
                <Video />
            </section>
            <section className="four pb-3">
                <Services />
            </section>
            <section>
                <Counter />
            </section>
            <section className="four">
                <ListButton />
            </section>
            <section>
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
            <section className="secCreative">
                <Creative />
            </section>
            <section className="blog">
                <Blog />
            </section>
            <section className="carousel">
                <Carousel />
            </section>
            <h1>aasdgfgh</h1>
            <span className="linea"></span>
        </div>
    );
}

export default App;
