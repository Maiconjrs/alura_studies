import React, { useState } from "react";
import Item from "./item";
import style from "./Lista.module.scss";

function Lista() {
  const [tarefas, setTarefas] = useState([
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "01:00:00",
    },
    {
      tarefa: "TypeScript",
      tempo: "01:30:00",
    },
  ]);

  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          setTarefas([
            ...tarefas,
            { tarefa: "Estudar estado", tempo: "05:00:00" },
          ]);
        }}
      >
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
