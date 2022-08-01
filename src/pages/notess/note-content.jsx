import { MdAccessTime } from "react-icons/md"
import { FiEdit3 } from "react-icons/fi"
import { AiOutlineStar } from "react-icons/ai"
const NoteContent = ({
  note: { date, content, title, tag, importance, dueon, time },
}) => {
  return (
    <div>
      <div className="max-w-xs flex flex-col justify-between rounded-lg border border-gray-400 mb-6 py-5 px-4">
        <div>
          <h3 className="leading-7 font-semibold">{title}</h3>
          <p className="leading-7 m-2">{content}</p>
        </div>
        <div>
          <div className="mb-3 flex items-center">
            <div
              className="border border-gray-3n rounded-full px-3 py-1 text-gray-600 text-xs flex items-center"
              aria-label="due on"
              role="contentinfo"
            >
              <MdAccessTime />
              <p className="ml-2">
                {new Date().toLocaleString("fr", {
                  day: "numeric",
                  month: "long",
                })}{" "}
                {new Date().toLocaleString("fr", {
                  hour: 'numeric'
                })}
              </p>
            </div>
            <button
              className="p-1 bg-gray-800 rounded-full ml-2 text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
              aria-label="save in starred items"
              role="button"
            >
              <AiOutlineStar />
            </button>
          </div>
          <div className="flex items-center justify-between text-gray-800">
            <p className="text-sm capitalize">
              {new Date().toLocaleString("fr", {
                month: "long",
                weekday: "long",
                year: "numeric",
                day: "numeric",
              })}
            </p>
            <button
              className="w-8 h-8 rounded-full  bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
              aria-label="edit note"
              role="button"
            >
              <FiEdit3 />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NoteContent
