import {IoMdAdd} from 'react-icons/io'
import { useRef, useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import {GrFormClose} from 'react-icons/gr'

 export default   function NoteNew({add, categories}) {
  const [open, setOpen] = useState(false)
 let form = useRef(null)
    const handleSubmit = (event) => {
        event.preventDefault()
        setOpen(false)
        const form_data = new FormData(form.current)
        let newNotes = {}
        form_data.forEach((value, key) => {
            newNotes[key] = value
        })
        add(newNotes)
      form.current.reset()
    }
    const handleOpen = (event) => () => {
      setOpen(event)

      // clear ref
      form.current.reset()
    }
      return (<>
      <button htmlFor="create-notes" className="btn modal-button btn-info" onClick={handleOpen(true)}>
    <IoMdAdd className="w-5 h-5" />
  </button>
    <input type="checkbox" id="create-notes" className="modal-toggle" checked={open} onChange={() => console.log("hi")}/>
  <div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <form id="createnotes" onSubmit={handleSubmit} ref={form}>
            <div className="bg-white dark:bg-gray-800">
                <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
                    <div className="flex xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p className="text-lg font-bold">Ajouter notes et memos</p>
                            
                        </div>

                    </div>
                    <div className="mx-auto">
                        
                            <div className="mt-4 flex flex-col">
                                <label htmlFor="title" className="pb-2 text-sm font-bold">
                                    Title
                                </label>
                                <input type="text" id="title" name="title" className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="@example" />
                            </div>
                            <div className="mt-8 flex flex-col">
                                <label htmlFor="content" className="pb-2 text-sm font-bold">
                                    Description
                                </label>
                                <textarea id="content" name="content" className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Let the world know who you are" rows={5}/>
                                <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">Character Limit: 200</p>
                            </div>
                            <div>
                              <select className="select w-full max-w-xs" name="category" id="category">
                                  {categories.map(category => {
                                    return <option 
                                      key={category}
                                      value={category}
                                    >
                                  {category}
                                    </option>
                                  })}
                                </select>
                            </div>
        <div className="divider"></div>

                            {/* <div className='flex justify-between'>

                            <div className="mt-4 flex flex-col">
                                <label htmlFor="date" className="pb-2 text-sm font-bold">
                                    date d'échéance
                                </label>
                                <input
                  type="date"
                  id="date"
                  name="dueon"
                  min={new Date().toISOString().split("T")[0]}
                  className="input input-bordered my-2 w-36"
                />
                            </div>
                            <div className="mt-4 flex flex-col">
                <label htmlFor="time" className="pb-2 text-sm font-bold">
                  Heure
                  </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="input input-bordered my-2 w-36"
                  ></input>
                    </div>
                            </div> */}

                </div>
                </div>
                  </div>
                  <div className='modal-actions justify-end flex gap-3'>
                                  <button className='btn btn-sm btn-error' onClick={handleOpen(false)}>Cancel 
                                  <GrFormClose /></button>
                                  <button className='btn btn-sm btn-info' type="submit">Add
                                  <BiPlus /></button>
  </div>
        </form>
    
  </div>
  
  </div>
  </>)
    }
  
  