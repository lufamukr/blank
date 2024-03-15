import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import st from "./Main.module.css"
import { NewLesson } from "../lessons/newLesson/NewLesson";
import { Section } from "../section/Section";

export function Main() {
  return(
    <main className={st.main}>
      <aside className={st.aside}>
        <ul className={st.list}>
          <li><NavLink to="/">Blank</NavLink></li>
          <li><NavLink to="/new">Section</NavLink></li>
        </ul>
      </aside>
      <section className={st.section}>
        <Routes>
          <Route path="/" element={<Section/>}></Route>
          <Route path="/new" element={<NewLesson/>}></Route>
        </Routes>
      </section>
    </main>
  )
}