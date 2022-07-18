import Avatar from "react-nice-avatar"
import {BiCategoryAlt, BiWorld} from "react-icons/bi"
import {GiRocketFlight} from "react-icons/gi"
function TableContent({title, body, showModal, id}) {
  const titles = title.split(" ")
  return (   
      <tr>
        <td>
        <p className="capitalize">
           {new Date(Math.floor(Math.random() * new Date().getTime())).toLocaleString('fr', {
             weekday: 'long',
             month: 'long',
             day: 'numeric'
            })}
            </p>
            <span className="text-xs">{Math.floor(Math.random() * 12)} {["AM", "PM"][Math.floor(Math.random() * 2)]}</span>
        </td>
        <td>
          <div className="flex items-center space-x-3 cursor-pointer" onClick={showModal({title, body, id})}>
                <Avatar className="w-10 h-10" shape="square" />
              <div>{titles.length > 4 ? 
              <>
              <p>
                {titles.slice(0, 4).join(" ")}
              </p> 
              <p>
                {titles.slice(4, 8).join(" ")}
              </p> 
              </>
              : <p>{titles.slice(0, 4).join(" ")}</p>}
              </div>
          </div>
        </td>
        <td>
        <BiCategoryAlt className="w-5 h-5" />
        </td>
        <td>
          <BiWorld className="w-5 h-5" />
        </td>
        <td >
          <div className="flex justify-between items-center gap-2 ">
            <span>
              {Math.floor(Math.random() * 100)}
              </span>
            <div className="w-full h-6 rounded-md overflow-hidden">
              <div className={`w-${Math.floor(Math.random() * 9)} h-full bg-orange-500`}></div>
            </div>
            </div>
        </td>
        <td>
        <div className="flex justify-between items-center gap-2">
            <span>
              {Math.floor(Math.random() * 100)}
              </span>
            <div className="w-full h-6 rounded-md overflow-hidden">
              <div className={`w-${Math.floor(Math.random() * 9)} h-full bg-blue-400`}></div>
            </div>
            </div>
            <div className="flex justify-between items-center gap-2">
            <span>
              {Math.floor(Math.random() * 100)}
              </span>
            <div className="w-full h-6 rounded-md overflow-hidden">
              <div className={`w-${Math.floor(Math.random() * 9)} h-full bg-pink-400`}></div>
            </div>
            </div>

        </td>
        <th>
          <button className="btn btn-accent">
          <GiRocketFlight />
          </button>
        </th>
      </tr>
     
  )
}
export default TableContent