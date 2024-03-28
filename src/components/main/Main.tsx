import React from "react";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import st from "./Main.module.css"
import { NewLesson } from "../lessons/newLesson/NewLesson";
import { Section } from "../section/Section";

export function Main() {

  let stateSection = [
    {path: "/" , title: "Blank", className: "navlink"},
    {path: "/new", title: "Section Title", className: "navlink" },
  ] 

  return(
    <main className={st.main}>
      <aside className={st.aside}>
        <ul className={st.list}>
          {
            stateSection.map((sec) => {
              return(<li><NavLink to={sec.path} className={sec.className}>{sec.title}</NavLink></li>)
            })
          }
        </ul>
      </aside>
      <section className={st.section}>
        <Routes>
          <Route path="/" element={<Section/>}></Route>
          <Route path="/new" element={<NewLesson/>}></Route>
          <Route path="/*" element={<Navigate to={"/"}/>}></Route>
        </Routes>
      </section>
    </main>
  )
}