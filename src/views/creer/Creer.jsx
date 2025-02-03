import { useNavigate } from "react-router-dom";


function Creer({ sauvegarder }) {
  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    sauvegarder(
      e.target.titre.value,
      e.target.description.value,
    );
    navigate('/');
  }
  return (
    <div>
      <h2>Créer un todo</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="titre" />
        <textarea name="description"></textarea>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}


export default Creer