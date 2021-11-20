import React from 'react'


function Header(props){
    return(
        <header className="flex-row space-between px-1">
            <h1>Travis Puryear</h1>
            <p>{props.children}</p>


        </header>
    );
}





export default Header