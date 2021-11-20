import React, { useState } from "react";
import Header from "./components/Header"
import Nav from "./components/Nav"
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  const [navPages] = useState([
      {name:"Main"},
    {
      name: "Portfolio",
    },
    { name: "Contant" },
    { name: "Resume" },
  ]);


  const [currentPage, setCurrentPage] = useState(navPages[0]);

  return (
      <div>
          <Header>
              <Nav
                    navPages={navPages}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}


              ></Nav>
          </Header>
          <main>
              <Page currentPage={currentPage}></Page>
          </main>
        < Footer />




      </div>
  )







}

export default App;
