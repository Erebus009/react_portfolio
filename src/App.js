import React from "react";
import Header from "./components/Header";
import About from "./components/About"
import Footer from "./components/Footer";
import Portfiolo from "./components/Portfolio";
import Contact from "./components/Contact"


function App() {
 

 

  return (
    <div>
      <Header>
       
      </Header>
      <main>
        <section id="About me">
        <About />
        </section>
        <section id="Projects">
        <Portfiolo />
        </section>
        <section id="Contact">
        <Contact />
        </section>
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
