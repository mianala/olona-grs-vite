import { useId } from "react"
import {AiOutlineTag} from 'react-icons/ai'
const NoteSide = ({categories, changeCategory}) => {
    const id = useId()
return <div>
    <div>Esorina</div>
    <h3 className="text-2xl font-semibold">Notes et Memos</h3>
    <p className="underline my-3 text-lg">Categories</p>
    <ul className="menu bg-base-100 w-56 p-2 rounded-box">
        {categories.map(category => {
            return <li key={category} onClick={() => changeCategory(category)}>
                <a>

        <AiOutlineTag className="w-5 h-5"/>
    {category}
                </a>
  </li>
        })}
    </ul>
</div>
}
export default NoteSide