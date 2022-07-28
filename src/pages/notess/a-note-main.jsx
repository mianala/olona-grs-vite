import Side from "./note-side.jsx"
import Container from "./note-container.jsx"
import { useState } from "react"
const NoteMain = () => {
  const [categories, setCategories] = useState([
    "Marketing",
    "Shopping",
    "Ads",
    "Posts",
    "Video",
    "Memo",
  ])
  const [currentCategory, setCurrentCategory] = useState("Marketing")
  const [notes, setNotes] = useState([
    {
      id: 1,
      category: "Marketing",
      title: "Marketing",
      content:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      dueon: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
      time: "10:00",
    },
  ])
  const changeCategory = (category) => {
    console.log(category)
    setCurrentCategory(category)
  }
  const addNote = (note) => {
    setNotes((prev) => [...prev, { ...note, id: notes.length + 1 }])
  }
  return (
    <div className="grid grid-cols-[1fr_3fr]">
      <Side categories={categories} changeCategory={changeCategory} />
      <Container
        notes={notes}
        currentCategory={currentCategory}
        addNote={addNote}
        categories={categories}
      />
    </div>
  )
}
export default NoteMain
