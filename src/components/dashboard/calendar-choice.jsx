import { Calendar } from "react-modern-calendar-datepicker"
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
          </div>
        </div>
        <div
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
        <div className={`${!openCalendar ? "" : "hidden"}`}></div>
      </div>
    </div>
  )
}
export default ChoixCompte
