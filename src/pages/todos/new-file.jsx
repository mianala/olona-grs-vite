import { FcTodoList } from "react-icons/fc"
import { BiPlus, BiLocationPlus } from "react-icons/bi"
import { TbFileDescription } from "react-icons/tb"
import { RiTeamLine } from "react-icons/ri"
import { TbBadge } from "react-icons/tb"
import { MdTitle } from "react-icons/md"
import { useState } from "react"
import {
  AiOutlineCheckSquare,
  AiOutlineFieldTime,
  AiOutlineLink,
} from "react-icons/ai"
const formcontent = [
  { title: "Titre", icon: <MdTitle /> },
  { title: "Mots cles", icon: <TbFileDescription /> },
  { title: "Membres", icon: <RiTeamLine /> },
  { title: "Etiquette", icon: <TbBadge /> },
  { title: "Checklist", icon: <AiOutlineCheckSquare /> },
  { title: "Temps", icon: <AiOutlineFieldTime /> },
  { title: "Lien", icon: <AiOutlineLink /> },
  { title: "Localisation", icon: <BiLocationPlus /> },
]
export default function NewFile({ addTodo }) {
  const [necessaryForms, setNecessaryForms] = useState([
    {
      title: "Titre",
      icon: <MdTitle />,
      value: "",
    },
    {
      title: "Mots cles",
      icon: <TbFileDescription />,
      value: "",
    },
  ])
  const setValue = (title) => (event) => {
    setNecessaryForms((prev) =>
      prev.map((form) =>
        form.title === title ? { ...form, value: event.target.value } : form
      )
    )
  }
  const addToForm = (menu) => () => {
    // if menu.title already in necessaryForms, do nothing
    if (necessaryForms.find((form) => form.title === menu.title)) return
    setNecessaryForms((prev) => [...prev, menu])
  }
  const addItToTodo = () => {
    const todo = {
      carte: necessaryForms[0].value,
      type: necessaryForms[1].value,
    }
    addTodo(todo)
    setNecessaryForms([
      {
        title: "Titre",
        icon: <MdTitle />,
        value: "",
      },
      {
        title: "Mots cles",
        icon: <TbFileDescription />,
        value: "",
      },
    ])
  }
  return (
    <div className="modal-box relative w-11/12 max-w-5xl flex gap-7">
      <div>
        <h3 className="font-bold text-lg flex items-center gap-5">
          <FcTodoList />
          Ajouter a la carte
        </h3>
        <ul className="menu bg-base-100 w-56 p-2 rounded-box gap-2">
          {formcontent.map((formes, idx) => (
            <li
              key={idx}
              className="border-neutral-100 bg-slate-200 rounded-lg"
              onClick={addToForm(formes)}
            >
              <div>
                {formes.icon}
                {formes.title}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg flex items-center gap-5 justify-between">
          <span>Formes</span>
          <div className="flex gap-3">
            <label
              htmlhtmlFor="my-modal-6"
              className="btn btn-error gap-2 mb-3 modal-button"
            >
              Cancel
              <BiPlus className="w-4 h-4" />
            </label>
            <label
              htmlhtmlFor="my-modal-6"
              className="btn-info btn gap-2 mb-3 modal-button"
              onClick={addItToTodo}
            >
              Create
              <BiPlus className="w-4 h-4" />
            </label>
          </div>
        </h3>
        <div className="flex flex-col gap-3">
          {necessaryForms.map((form) => (
            <div className="flex flex-col gap-2" key={form.title}>
              <h3 className="font-bold text-sm flex items-center gap-5">
                {form.icon}
                {form.title}
              </h3>
              <input
                type="text"
                className="input min-w-[600px] input-bordered"
                value={
                  necessaryForms.filter((necc) => necc.title === form.title)[0]
                    .value
                }
                onChange={setValue(form.title)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
