import React, { useState } from "react";
import Header from "./components/Header"
import Nav from "./components/Nav"
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  const [navPages] = useState([
      {name:"about"},
    {
      name: "portfolio",
    },
    { name: "contact" },
    { name: "resume" },
  ]);


  const [currentPage, setCurrentPage] = useState(navPages[0]);

  return (
      <div>
          <Header>
              <Nav
                    pages={navPages}
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
