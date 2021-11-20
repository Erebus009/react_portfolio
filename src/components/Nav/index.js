import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props){
    const{
        pages = [],
        setCurrentPage,
        currentPage
    } = props

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
      }, [currentPage]);
    
      return (    
          <nav>
            <ul className="d-flex mt-3 flex-column list-unstyled" >
              {pages.map((Page) => (
                <li
                  className={`mx-5 mt-3 text-dark display-3 ${
                    currentPage.name === Page.name && 'navActive'
                    }`}
                  key={Page.name}
                >
                  <span
                    onClick={() => setCurrentPage(Page)}
                    
                  >
                    {capitalizeFirstLetter(Page.name)}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
      );
    }



export default Nav;