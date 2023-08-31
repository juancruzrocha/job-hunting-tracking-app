import React from "react";
import style from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={style.NavBar}>
      <h3>Inicio</h3>
      <h3>Quien soy?</h3>
      <h3>Herramientas</h3>
    </div>
  );
}

export default NavBar;
