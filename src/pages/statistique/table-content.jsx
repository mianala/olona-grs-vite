import Avatar from "react-nice-avatar"
import {BiCategoryAlt, BiWorld} from "react-icons/bi"
function TableContent() {
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
          <div className="flex items-center space-x-3">
                <Avatar className="w-12 h-12" shape="square" />
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
        <BiCategoryAlt className="w-6 h-6" />
        </td>
        <td>
          <BiWorld className="w-6 h-6" />
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
     
  )
}
export default TableContent