import {AiOutlineGlobal} from 'react-icons/ai'
import {GrGroup} from 'react-icons/gr'
export default function Tabs({changeView, view}) {
      return (<div className="flex border-b w-max mb-3">

    <button className="relative block p-2" onClick={changeView("global")}>
      {view === 'global' ? <span className="absolute inset-x-0 w-full h-px bg-accent -bottom-px"></span> : ""}
      <div className="flex items-center justify-center">
          <AiOutlineGlobal className="flex-shrink-0 w-5 h-5" />
        <span className="ml-3 text-sm font-medium"> Global </span>
      </div>
    </button>

  
    <button className="relative block p-2" onClick={changeView("audience")}>
    {view === 'audience' ? <span className="absolute inset-x-0 w-full h-px bg-accent -bottom-px"></span> : ""}

      <div className="flex items-center justify-center">
    
          <GrGroup className="flex-shrink-0 w-5 h-5" />

        <span className="ml-3 text-sm font-medium"> Audience </span>
      </div>
    </button>
</div>)
    }
  
  