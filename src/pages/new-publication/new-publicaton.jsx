import { FiSend } from "react-icons/fi"
import { BiImageAdd } from "react-icons/bi"
import { useState } from "react"
import { CgClose } from "react-icons/cg"
import { BiTimeFive } from "react-icons/bi"
import { GrValidate } from "react-icons/gr"

const NewPublication = () => {
  const [selectedDay, setSelectedDay] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
  })
  const [selectedTime, setSelectedTime] = useState(null)
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5 bg-white rounded-lg">
          <div className="pt-8  lg:pt-12 lg:col-span-3">
            <div className="flex justify-between items-center mb-5">
              <h4 className="text-xl font-bold">Creation d' une poste</h4>
              <button className="btn btn-info gap-2">
                Publier
                <FiSend />
              </button>
            </div>
            <form action="" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Titre
                </label>
                <label className="label">
                  <span className="label-text">
                    De quoi voulez vous parler?
                  </span>
                </label>
                <input
                  className="input w-full input-bordered"
                  placeholder="Titre"
                  type="text"
                  id="name"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">#mot cles</span>
                </label>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="#example"
                  className="input w-full max-w-xs input-bordered"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <label className="label">
                  <span className="label-text">Décrivez votre post</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {" "}
                  Choisissez des photos ou des vidéos{" "}
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <BiImageAdd className="w-8 h-8 opacity-50" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </form>
          </div>
          <div className="lg:pt-12 lg:col-span-2 mx-5 h-full">
            <div>
              <h4 className="text-xl font-bold mt-2 mb-8">Planing</h4>

              <div>
                <p className="mb-1">Date du publication</p>
                <input
                  type="date"
                  id="start"
                  name="trip-start"
                  value={new Date().toISOString().split("T")[0]}
                  min={new Date().toISOString().split("T")[0]}
                  className="input input-bordered my-2 w-36"
                  onChange={(event) => setSelectedDay(event.target.value)}
                />
                <p className="mb-1">Heure optimal</p>
                <input
                  type="time"
                  id="appt"
                  name="appt"
                  className="input input-bordered my-2 w-36"
                  onChange={(e) => setSelectedTime(e.target.value)}
                ></input>
                <div className="my-4">
                  <div>
                    <p className="mb-1">Etat de validation</p>
                    <div className="badge badge-warning gap-2">en attente</div>
                  </div>
                  <div className="mt-4">
                    <p className="mb-1">Etat de publication</p>
                    <div className="badge badge-warning gap-2">en attente</div>
                  </div>
                </div>
                <button className="btn btn-outline gap-2">
                  <GrValidate /> Envoyer pour validation
                </button>
                <div className="modal-action">
                  <button className="btn gap-2">
                    cancel <CgClose />
                  </button>
                  <button className="btn btn-success gap-2">
                    Planifier <BiTimeFive />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default NewPublication
