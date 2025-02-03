import { Link } from "react-router-dom"


function Liste({ todos }) {
  return (
    <div>
      <h2>Liste des todos</h2>
      <ul>
        {todos.map(({ id, titre, statut }) => (
          <li key={id}>
            <Link to={id}>[{statut}] {titre}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Liste