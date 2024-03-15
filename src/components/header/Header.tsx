import React from "react";
import logo from "../../image/astron.svg";
import st from "./Header.module.css";

export function Header() {
  return(
    <header>
      <img className={st.logo} src={logo} alt="logo" />
      <h1>Blank</h1>
    </header>
  )
}