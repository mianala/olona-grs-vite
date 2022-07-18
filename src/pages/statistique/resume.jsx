import { TablePublication } from './stats-tabs';
import { useState} from 'react'
import { GrDownload } from 'react-icons/gr'
import {dummy_recent} from "./dummy-charts" 

const Resume = () => {
    const [duration, setDuration] = useState(new Date(new Date() - 7 * 24 * 60 * 60 * 1000))
    const changeDuration = (new_duration) => {
        setDuration(new Date(new Date() - +new_duration.target.value * 24 * 60 * 60 * 1000))
    }
    const [statsNames, setStatsNames] = useState(dummy_recent)
    return (<div>
        <header className='flex items-center gap-3 mb-5'>
            <h3 className='text-base font-bold'>Resume de la page</h3>
            <select className="select select-ghost w-full max-w-xs select-sm text-blue-600" onChange={changeDuration}>
                <option value={7}>7 derniers jours</option>
                <option value={15}>2 Semaines</option>
                <option value={30}>1 mois</option>
                <option value={365}>1 an</option>
            </select>
            <p className="mt-1 text-sm font-medium text-gray-600">
                    {new Date().toLocaleString("fr", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    })} - {duration.toLocaleString("fr", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    })}
                    </p>
                    <div className='flex-1'></div>
            <div>
                <button className='btn btn-sm border-none btn-outline'>
                    Sauvegarder
                    <GrDownload className='ml-2' />
                </button>
            </div>
        </header>
        <div className='flex flex-wrap h-full'>
        {statsNames.map(({name, value, stats, icon}) => {
        return (<TablePublication value={value} name={name} stats={stats} icon={icon} key={value} />)
    })}
        
        </div>
            
    </div>)
}
export default Resume