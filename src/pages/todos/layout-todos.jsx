const LayoutTodos = ({ children }) => {
  return (
    <table className="table w-full overflow-auto side-hide">
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <th>Titre</th>
          <th>Mots cles</th>
          <th>Date prevue</th>
          <th>Optimal</th>
          <th>Etat</th>
          <th>Validation</th>
          <th>Etiquettes</th>
          <th>Boost</th>
          <th>Responsables</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}
export default LayoutTodos
