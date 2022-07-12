import Avatar from "react-nice-avatar"
import { BiDownArrow } from "react-icons/bi"
const TodosTable = ({
  todo: {
    carte,
    type,
    etiquette,
    membres,
    limite,
    changeMembre,
    changeLimite,
    checkHandler,
  },
  changeEtiquette,
  id,
}) => {
  const cart = carte.split(" ")
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        {cart.length < 5 ? (
          cart.join(" ")
        ) : (
          <>
            <p>{cart.slice(0, 4).join(" ")}</p>
            <p>{cart.slice(4, cart.length).join(" ")}</p>
          </>
        )}
      </td>
      <td>
        <span className="badge">{type}</span>
      </td>
      <td>{limite}</td>
      <td>
        {`${Math.floor(Math.random() * 10) + 1}
        ${["AM", "PM"][Math.floor(Math.random() * 2)]}`}
      </td>
      <td>
        {
          ["Usually", "Maybe", "Always", "Not really"][
            Math.floor(Math.random() * 4)
          ]
        }
      </td>
      <td>{["Oui", "Non"][Math.floor(Math.random() * 2)]}</td>
      <td>
        <div className="dropdown">
          <label tabIndex="0" className="m-1 flex items-center gap-3">
            {etiquette.status === "todo" ? (
              <div className="badge-warning badge gap-2">{etiquette.color}</div>
            ) : (
              ""
            )}
            {etiquette.status === "done" ? (
              <div className="badge-success badge gap-2">{etiquette.color}</div>
            ) : (
              ""
            )}
            {etiquette.status === "in progress" ? (
              <div className="badge-info badge gap-2">{etiquette.color}</div>
            ) : (
              ""
            )}
            {etiquette.status === "outdated" ? (
              <div className="badge-error badge gap-2">{etiquette.color}</div>
            ) : (
              ""
            )}
            <BiDownArrow />
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-0 shadow bg-base-100 rounded-box w-52 "
          >
            {[
              { status: "todo", color: "Prioritaire" },
              { status: "done", color: "Finis" },
              { status: "in progress", color: "En cours" },
              { status: "outdated", color: "Expirer" },
            ].map((etiquette, index) => (
              <li key={index} onClick={changeEtiquette(id, etiquette)}>
                {etiquette.status === "todo" ? (
                  <div>
                    <div className="badge-warning badge gap-2">
                      {etiquette.color}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {etiquette.status === "done" ? (
                  <div>
                    <div className="badge-success badge gap-2">
                      {etiquette.color}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {etiquette.status === "in progress" ? (
                  <div>
                    <div className="badge-info badge gap-2">
                      {etiquette.color}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {etiquette.status === "outdated" ? (
                  <div>
                    <div className="badge-error badge gap-2">
                      {etiquette.color}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
      </td>
      <td>{Math.floor(Math.random() * 1000)} €</td>
      <td>
        <div className="avatar-group -space-x-7">
          {[...Array(membres).keys()].map((_, idx) => (
            <div className="avatar" key={idx}>
              <div className="w-12">
                <Avatar key={idx} className="w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </td>
    </tr>
  )
}
export default TodosTable
