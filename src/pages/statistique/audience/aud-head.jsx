import {CgExport} from "react-icons/cg"
const AudienceHeader = ({view, changeView}) => {
return <div>
    <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Audience</h3>
        <div className="dropdown dropdown-left dropdown-hover">
  <label tabIndex="0" className="btn mr-3 gap-2 border-none btn-outline bg-slate-300">Export <CgExport className="w-5 h-5"/></label>
  <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><button>To csv</button></li>
    <li><button>To excel</button></li>
    <li><button>To Json</button></li>
  </ul>
</div>
    </div>
    <div className="flex gap-3">
        <button 
        onClick={changeView("actuelle")} 
        className={`btn btn-sm btn-outline border-none hover:bg-blue-200 hover:text-blue-500 ${view === "actuelle" ? "bg-blue-200 text-blue-500" : ""}`}>Audience actuelle</button>
        <button 
        onClick={changeView("potentiel")}
         className={`btn btn-sm btn-outline border-none hover:bg-blue-200 hover:text-blue-500 ${view === "potentiel" ? "bg-blue-200 text-blue-500" : ""}`}>Audience potentiel</button>
    </div>
</div>
}
export default AudienceHeader