import React from "react";

function Sidebar() {
  const renderMenu = 
  <div className="l-sidebar">
     
          <h1 className="l-logo">Victor Luz</h1>
          <nav className="c-sidebar">
            <a className="c-nav__item" href="#sobre-mim">Sobre mim</a>
            <a className="c-nav__item" href="#contatos">Contatos</a>
          </nav>
  </div>
  return (<div>
   
  <button className="l-sidebar__btn"type="button" onClick={renderMenu.innerHTML}>Menu</button>
  </div>
  
  

  );
}
export default Sidebar