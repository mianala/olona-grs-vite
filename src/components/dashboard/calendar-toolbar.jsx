import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

export const RBCToolbar = (toolbar) => {
  const goToDayView = () => {
    toolbar.onView("day")
  }
  const goToWeekView = () => {
    toolbar.onView("week")
  }
  const goToMonthView = () => {
    toolbar.onView("month")
  }
  const goToAgenda = () => {
    toolbar.onView("agenda")
  }
  const goToBack = () => {
    // switch case toolbar.view if week setMonth to toolbar.date.getWeek() - 1
    toolbar.date.setMonth(toolbar.date.getMonth() - 1)
    toolbar.onNavigate("prev")
  }

  const goToNext = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() + 1)
    toolbar.onNavigate("next")
  }

  const goToCurrent = () => {
    const now = new Date()
    toolbar.date.setMonth(now.getMonth())
    toolbar.date.setYear(now.getFullYear())
    toolbar.onNavigate("current")
  }

  const label = new Date(toolbar.date).toLocaleDateString("fr", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center">
        <button onClick={goToBack} className="btn btn-outline btn-sm">
          <FaAngleLeft />
        </button>
        <button
          onClick={goToCurrent}
          className="btn btn-outline border-none btn-sm"
        >
          today
        </button>
        <button onClick={goToNext} className="btn btn-outline btn-sm">
          <FaAngleRight />
        </button>
      </div>
      <div className="card-title">{label}</div>

      <div className="btn-group">
        <button
          className={`btn btn-outline btn-sm ${
            toolbar.view === "month" ? "btn-active" : ""
          }`}
          onClick={goToMonthView}
        >
          Month
        </button>
        <button
          className={`btn btn-outline btn-sm ${
            toolbar.view === "day" ? "btn-active" : ""
          }`}
          onClick={goToDayView}
        >
          Day
        </button>

        <button
          className={`btn btn-outline btn-sm ${
            toolbar.view === "week" ? "btn-active" : ""
          }`}
          onClick={goToWeekView}
        >
          Week
        </button>
        <button
          className={`btn btn-outline btn-sm ${
            toolbar.view === "agenda" ? "btn-active" : ""
          }`}
          onClick={goToAgenda}
        >
          Agenda
        </button>
      </div>
    </div>
  )
}
