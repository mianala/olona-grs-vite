import { useState } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import { FcReadingEbook } from "react-icons/fc"
import { IoMdAdd } from "react-icons/io"
import { MdOutlineClear } from "react-icons/md"
import { RBCToolbar } from "./calendar-toolbar"
import { Calendar as DateRange } from "react-modern-calendar-datepicker"
import { FcCalendar } from "react-icons/fc"
import { MdDashboard } from "react-icons/md"
import { AiOutlineArrowDown } from "react-icons/ai"
import { toast } from "react-toastify"
import { useRef } from "react"
import moment from "moment"
const localizer = momentLocalizer(moment)

const ChoixCompte = () => {
  const [today, setToday] = useState(new Date())
  const newEventRef = useRef()
  const [newEventState, setNewEventState] = useState("")
  const [openCalendar, setOpenCalendar] = useState(false)
  const [addToSlot, setAddToSlot] = useState({
    from: new Date(),
    to: new Date(),
  })
  const [events, setEvents] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Some title",
    },
  ])
  const selectSlotHandler = (slotInfo) => {
    const { start, end } = slotInfo
    setOpenCalendar(true)
    setAddToSlot({
      from: start,
      to: end,
    })
  }
  // const createEventHandler = () => {
  //   const { year, month, day } = selectedDayRange.from
  //   if (selectedDayRange.to === null) {
  //     toast.success("Event created")
  //     setEvents((prev) => [
  //       ...prev,
  //       {
  //         start: new Date(year, month - 1, day),
  //         end: new Date(year, month - 1, day),
  //         title: "How are you?",
  //       },
  //     ])
  //     return
  //   }
  //   const { year: yearTo, month: monthTo, day: dayTo } = selectedDayRange.to
  //   const begin = new Date(year, month - 1, day)
  //   const end = new Date(yearTo, monthTo - 1, dayTo)
  //   setEvents((prev) => [
  //     ...prev,
  //     {
  //       start: begin,
  //       end: end,
  //       title: <button className="btn">How</button>,
  //     },
  //   ])
  // }
  const createEventHandler = () => {
    setEvents((prev) => [
      ...prev,
      {
        start: addToSlot.from,
        end: addToSlot.to,
        title: newEventState,
      },
    ])
    setNewEventState("")
    setOpenCalendar(false)
    toast.success(newEventState)
  }
  return (
    <div>
      <input
        type="checkbox"
        id="my-modal-6"
        className="modal-toggle"
        checked={openCalendar}
        onChange={() => console.log("PLEASE ENTER A DATE")}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Creation d'un evenement</h3>
          <div className="form-control w-full max-w-xs my-3">
            <label className="label">
              <span className="label-text">Titre de l' evenement</span>
              <span className="label-text-alt">*</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              ref={newEventRef}
              value={newEventState}
              onChange={(e) => setNewEventState(e.target.value)}
            />
          </div>
          <h4 className="font-bold text-base flex items-center gap-4">
            <span>
              <FcReadingEbook />
            </span>
            Aperçu
          </h4>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
              <FcCalendar className="w-8 h-8" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-xl font-semibold leading-none">
                {newEventState}
              </p>
              <p className="capitalize">{`${new Date(
                addToSlot.from
              ).toLocaleDateString("fr", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}`}</p>
              <p className="capitalize">{` ${new Date(
                addToSlot.to
              ).toLocaleDateString("fr", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}`}</p>
            </div>
          </div>

          <div className="modal-action">
            <button
              className="btn btn-outline"
              onClick={() => setOpenCalendar(false)}
            >
              Annuler
            </button>
            <button className="btn bg-blue-400" onClick={createEventHandler}>
              Ajouter
            </button>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex bg-base-100 justify-between">
          <h2 className="card-title">
            <MdDashboard className="w-6 h-6 mr-4" />
            Tableau de bord
          </h2>
          <div className="flex gap-2">
            <div className="btn btn-outline flex items-center">
              <AiOutlineArrowDown className="w-6 h-6 mr-4" />
              <FcCalendar className="w-6 h-6 mr-4" />
              {today.toLocaleDateString("fr", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            {/* <div>
              <label htmlhtmlFor="add-event" className="btn modal-button">
                <IoMdAdd className="w-6 h-6" />
                Ajouter
              </label>

              <input type="checkbox" id="add-event" className="modal-toggle" />
              <label htmlhtmlFor="add-event" className="modal cursor-pointer">
                <label
                  className="modal-box relative w-11/12 max-w-5xl"
                  htmlhtmlFor=""
                >
                  <h3 className="text-lg font-bold">Calendar</h3>
                  <div className="card card-side bg-base-100">
                    <div className="card-body">
                      <label className="text-sm font-medium">Planning</label>
                      <div className="relative mt-1">
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered input-accent w-full max-w-xs"
                        />
                      </div>
                      <label className="text-sm font-medium">latform</label>
                      <div className="relative mt-1">
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered input-accent w-full max-w-xs"
                        />
                      </div>
                    </div>
                    <DateRange
                      value={selectedDayRange}
                      onChange={setSelectedDayRange}
                      colorPrimary="#0fbcf9" // added this
                      colorPrimaryLight="rgba(75, 207, 250, 0.4)" // and this
                      shouldHighlightWeekends
                    />
                  </div>
                  <div className="modal-action">
                    <label htmlhtmlFor="add-event" className="btn btn-outline">
                      cancel
                      <MdOutlineClear />
                    </label>
                    <label
                      htmlhtmlFor="add-event"
                      className="btn bg-emerald-600"
                      onClick={createEventHandler}
                    >
                      add
                      <IoMdAdd />
                    </label>
                  </div>
                </label>
              </label>
            </div> */}
          </div>
        </div>
      </div>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: 700 }}
        resizable={true}
        components={{ toolbar: RBCToolbar }}
        onSelectSlot={selectSlotHandler}
        selectable
      />
    </div>
  )
}
export default ChoixCompte
{
  /*
  const [openCalendar, setOpenCalendar] = useState(false)
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: { year: 2022, month: 7, day: 1 },
    to: {
      year: 2022,
      month: 7,
      day: 6,
    },
  }) */
  /* <div
          className={`card card-side bg-base-100 shadow-xl ${
            openCalendar ? "" : "hidden"
          }`}
        >
          <div className="card-body">
            <h2 className="card-title">
              <FcCalendar className="w-6 h-6 mr-4" />
              Calendar
            </h2>
            <p>
              Pick date on the right <FcRight />
            </p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => setOpenCalendar(false)}
              >
                close
              </button>
            </div>
          </div>
          <Calendar
            value={selectedDayRange}
            onChange={setSelectedDayRange}
            colorPrimary="#0fbcf9" // added this
            colorPrimaryLight="rgba(75, 207, 250, 0.4)" // and this
            shouldHighlightWeekends
          />
        </div> 
        
        import { Calendar as DateRange } from "react-modern-calendar-datepicker"
import { useState } from "react"
import { FcCalendar, FcRight } from "react-icons/fc"
import { MdDashboard } from "react-icons/md"
import { AiOutlineArrowDown } from "react-icons/ai"
import { motion } from "framer-motion"

const ChoixCompte = () => {
  const [today, setToday] = useState(new Date())
  const [openCalendar, setOpenCalendar] = useState(false)
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: { year: 2022, month: 7, day: 1 },
    to: {
      year: 2022,
      month: 7,
      day: 6,
    },
  })

  return (
    <div className="relative">
      <div>
        <div>
          <div className="flex bg-base-100 justify-between">
            <h2 className="card-title">
              <MdDashboard className="w-6 h-6 mr-4" />
              Tableau de bord
            </h2>
            <div
              className="btn btn-outline flex items-center"
              onClick={() => setOpenCalendar((prev) => !prev)}
            >
              <AiOutlineArrowDown className="w-6 h-6 mr-4" />
              <FcCalendar className="w-6 h-6 mr-4" />
              {today.toLocaleDateString({
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
        */
}
