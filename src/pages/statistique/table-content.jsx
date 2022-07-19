import Avatar from "react-nice-avatar"
import {BiCategoryAlt, BiWorld} from "react-icons/bi"
import {GiRocketFlight} from "react-icons/gi"
import { useState } from "react"
import { useEffectOnce } from "react-use"
function TableContent({title, body, showModal, id}) {
  const titles = title.split(" ")
  const [tendance, setTendance] = useState(0)
  const [interaction, setInteraction] = useState({
    first: 0,
    second: 0
  })
  useEffectOnce(() => {
    const tendance = Math.floor(Math.random() * 100)
    const interaction = {
      first: Math.floor(Math.random() * 100),
      second: Math.floor(Math.random() * 100)
    }
    setTendance(tendance)
    setInteraction(interaction)
  })
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
              {tendance}
              </span>
            <div className="w-full h-6 rounded-md overflow-hidden">
            <meter id="fuel"
       min="0" max="100"
       low="33" high="66" optimum="80"
       value={tendance}>
</meter>
            </div>
            </div>
        </td>
        <td>
        <div className="flex justify-between items-center gap-2">
            <span>
              {interaction?.first}
              </span>
            <div className="w-full h-6 rounded-md overflow-hidden">
            <meter id="fuel"
       min="0" max="100"
       low="33" high="66" optimum="80"
       value={interaction?.first}>
</meter>
            </div>
            </div>
            <div className="flex justify-between items-center gap-2">
            <span>
              {interaction?.second}
              </span>
            <div className="w-full h-6 rounded-md overflow-hidden">
            <meter id="fuel"
       min="0" max="100"
       low="33" high="66" optimum="80"
       value={interaction?.second}>
</meter>
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