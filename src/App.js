import React from "react";
import Header from "./components/Header";
import About from "./components/About"
import Footer from "./components/Footer";
import Portfiolo from "./components/Portfolio";
import Resume from "./components/Resume";


function App() {
 

 

  return (
    <div>
      <Header>
       
      </Header>
      <main>
        <About />
        <Portfiolo />
      
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
