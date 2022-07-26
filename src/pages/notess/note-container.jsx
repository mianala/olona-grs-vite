import Content from "./note-content"
import { useRef, useState, useEffect } from "react"
import NoteNew from "./note-new"
import {BiSearch} from 'react-icons/bi'
const NoteContainer = ({notes, currentCategory, addNote, categories}) => {
    const [search, setSearch] = useState('')
    const ref = useRef()
    const [currentNote, setCurrentNote] = useState([])
useEffect(() => {
    const filtered = notes.filter(note => note.category === currentCategory)
    setCurrentNote(filtered)
}, [notes, currentCategory])
    return <div>
        <div>Esorina</div>
        <div className="flex justify-between">

        <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered outline-none" ref={ref} value={search} onChange={(event) => setSearch(event.target.value)} />
    <button className="btn btn-square" onClick={() => ref.current.focus()}>
      <BiSearch className="w-5 h-5" />
    </button>


  </div>
</div>
<NoteNew add={addNote} categories={categories} />

        </div>
        <div className="py-3">
            {currentNote.map(note => {
                return <Content key={note.id} note={note} />
            })}
        </div>
    </div>
}
export default NoteContainer