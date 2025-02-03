import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"


function Todo({ todos, updateTodo, deleteTodo }) {
  const navigate = useNavigate();


  const [todo, setTodo] = useState({
    id: '', titre: '', description: '', statut: '',
  });


  // Réecupère l'id en paramètre d'URL
  const { todoid } = useParams();


  // Met à jour la state avec les infos du bon todo
  useEffect(() => {
    setTodo(todos.find(({ id }) => (id === todoid)));
  }, []);


  // Gestion du formulaire
  function handleSubmit(e) {
    e.preventDefault();
    updateTodo(
      todoid,
      e.target.titre.value,
      e.target.description.value,
      e.target.statut.value,
    );
    navigate('/');
  }


  function handleClick() {
    deleteTodo(todoid);
    navigate('/');
  }


  return (
    <div>
      <button onClick={handleClick}>Supprimer</button>
      <form onSubmit={handleSubmit}>
        <select name="statut" defaultValue={todo.statut}>
          <option value="À faire">À faire</option>
          <option value="Fait">Fait</option>
        </select>
        <input type="text" name="titre" defaultValue={todo.titre} />
        <textarea name="description" defaultValue={todo.description} />
        <button type="submit">Sauvegarder</button>
      </form>
    </div>
  )
}


export default Todo