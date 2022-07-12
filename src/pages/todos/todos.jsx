import { useState, useEffect } from "react"
import LayoutTodos from "./layout-todos"
import TodosTable from "./todos-table"
import { useEffectOnce } from "react-use"

import NewFile from "./new-file"
// import { BiLeftArrow, BiRightArrow } from "react-icons/bi"
import { BiPlus } from "react-icons/bi"
const DUMMY = {
  etiquettes: [
    { status: "todo", color: "Prioritaire" },
    { status: "done", color: "Finis" },
    { status: "in progress", color: "En cours" },
    { status: "outdated", color: "Expirer" },
  ],
  types: ["Marketing", "Development", "Design", "Testing", "Management", "HR"],
}
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}
const TODOS = () => {
  const [todos, setTodos] = useState([])
  const [shown, setshown] = useState([])
  const [pagination, setPagination] = useState(1)
  useEffectOnce(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        const response = data.map((todo) => ({
          id: todo.id,
          carte: todo.title,
          etiquette: DUMMY.etiquettes[Math.floor(Math.random() * 4)],
          type: DUMMY.types[Math.floor(Math.random() * 6)],
          membres: Math.floor(Math.random() * 6),
          limite: randomDate(
            new Date(),
            new Date(2024, 7, 1)
          ).toLocaleDateString("fr", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }),
        }))
        setshown(response.slice(0, 10))
        setTodos(response)
      })
  })
  useEffect(() => {
    setshown(todos.slice(0, pagination * 10))
  }, [pagination])
  const changeEtiquette = (id, etiquette) => () => {
    // change shown with id id' s etiquette
    console.log(etiquette)
    setshown(
      shown.map((todo) => (todo.id === id ? { ...todo, etiquette } : todo))
    )
  }
  const pageHandler = (page) => () => {
    switch (page) {
      case page < 1:
        return
      case page === pagination:
        return
      case page > Math.floor(todos.length / 10) + 1:
        return
      default:
        setPagination(page)
    }
  }
  const addTodo = (todo) => {
    console.log(todo)
    setshown((prev) => [
      {
        ...todo,
        id: Math.random(10000000000),
        etiquette: DUMMY.etiquettes[Math.floor(Math.random() * 4)],
        membres: Math.floor(Math.random() * 6),
        limite: randomDate(new Date(), new Date(2024, 7, 1)).toLocaleDateString(
          "fr",
          {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }
        ),
      },
      ...prev,
    ])
    setTodos([
      {
        ...todo,
        id: Math.random(10000000000),
        etiquette: DUMMY.etiquettes[Math.floor(Math.random() * 4)],
        membres: Math.floor(Math.random() * 6),
        limite: randomDate(new Date(), new Date(2024, 7, 1)).toLocaleDateString(
          "fr",
          {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }
        ),
      },
      ...todos,
    ])
  }
  return (
    <>
      <div className="flex justify-end">
        <label
          htmlFor="my-modal-6"
          className="btn btn-sm gap-2 mb-3 modal-button"
        >
          open modal
          <BiPlus className="w-4 h-4" />
        </label>

        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal">
          <NewFile addTodo={addTodo} />
        </div>
      </div>
      <LayoutTodos>
        {shown.map((todo) => (
          <TodosTable
            key={todo.id}
            todo={todo}
            id={todo.id}
            changeEtiquette={changeEtiquette}
          />
        ))}
      </LayoutTodos>
      {/* <ol className="flex justify-center space-x-1 text-xs font-medium">
        <button className="btn btn-outline btn-sm">
          <BiLeftArrow />
        </button>

        {[1, 2, 3, 4, 5].map((_, idx) => (
          <button
            className="btn btn-outline btn-circle btn-sm"
            key={idx}
            onClick={pageHandler(idx)}
          >
            {" "}
            {idx}{" "}
          </button>
        ))}

        <button className="btn btn-outline btn-sm">
          <BiRightArrow />
        </button>
      </ol> */}
    </>
  )
}
export default TODOS
