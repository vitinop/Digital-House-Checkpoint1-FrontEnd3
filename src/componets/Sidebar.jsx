import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

function Sidebar() {
  const [estadoAtualSideBar, alterarEstadoSideBar] = useState("");
  console.log(estadoAtualSideBar);
  return (
    <div>
      <button
        className="l-sidebar__btn"
        type="button"
        onClick={() => alterarEstadoSideBar("--open")}
      >
        <MenuIcon/>
      </button>

      <div className={`l-sidebar${estadoAtualSideBar}`}>
      <button type="button" class="button-Close" aria-label="Close"
      onClick={() => alterarEstadoSideBar('')}
      > <CloseIcon/></button>
        <div>
        
          <h1 className="l-logo">Victor Luz</h1>
          <nav className="c-sidebar">
            <a className="c-nav__item" href="#sobre-mim">
              Sobre mim
            </a>
            <a className="c-nav__item" href="#contatos">
              Contatos
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
