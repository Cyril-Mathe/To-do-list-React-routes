import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Creer from '../views/creer/Creer';
import Liste from '../views/liste/Liste';
import Effacer from '../views/effacer/Effacer';
import Todo from '../views/todo/Todo';


function App() {
  // - States
  const [todos, setTodos] = useState([]);


  // - Functions
  function ajouterTodo(titre, description) {
    setTodos((prev) => ([
      ...prev,
      {
        id: crypto.randomUUID(),
        statut: 'À faire',
        titre,
        description,
      },
    ]));
  }


    function viderTodos() {
      setTodos([]);
    }


    function updateTodo(id, titre, description, statut) {
      setTodos((prev) => {
        const todo = prev.find(({ id: tid }) => (id === tid));
        todo.titre = titre;
        todo.description = description;
        todo.statut = statut;
        return [...prev];
      })
    }


    function deleteTodo(id) {
      setTodos((prev) => (prev.filter(({ id: tid }) => (tid != id))));
    }




  return (
    <BrowserRouter>
      <h1>Mes todos</h1>
      <nav>
        <ul>
          <li><Link to='/'>Accueil</Link></li>
          <li><Link to='/creer'>Creer todo</Link></li>
          <li><Link to='/effacer'>Effacer</Link></li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<Liste todos={todos} />} />
        <Route path="/creer" element={<Creer sauvegarder={ajouterTodo} />} />
        <Route path="/effacer" element={<Effacer effacerTout={viderTodos} />} />
        <Route path=":todoid" element={<Todo todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App