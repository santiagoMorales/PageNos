import React from 'react';
import NavBar from './Components/NavBar'
import About from './Components/About'
import Video from './Components/Video'
import Services from './Components/Services'

function App() {
  return (
    <div>
    <section className="imagen">
        <NavBar/>
         <div className="button d-flex justify-content-center">
            <button type="button" className="btn btn-outline-dark rounded-circle ">&darr;</button>
         </div>
    </section>
    <section>
          <About/>
    </section>
    <section className="tree">
        <Video/>
    </section>
    <section className="four pb-3">
        <Services/>
    </section>

    <h1>aasdgfgh</h1>
    </div>
  );  
}

export default App;
