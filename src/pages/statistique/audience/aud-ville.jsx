import { Cities, Pays } from "../../../assets/city/city"
import MeterStats from "../../../components/stats/meter-stats"
const AudienceVille = () => {
    return <div>
        <div>
            <h3 className="text-lg font-bold">Principale villes</h3>
            <div className="divider"></div>
            <div className="flex flex-col">
                {Cities.map(({lng, city}) => { 
                const value = Math.floor(Math.random() * 100)
            return <div className="grid grid-cols-3" key={lng}>
                <p className="text-md">{city} {" "}
                </p>
                <p>{value}%</p>
                <MeterStats key={lng} value={value} />
                </div>} )}
            </div>
        </div>
        <div>
        <div className="divider"></div>

        <h3 className="text-lg font-bold">Principaux pays</h3>
        <div className="divider"></div>
        </div>
        <div className="flex flex-col">
            {Pays.map(({code, name}) => { 
                const value = Math.floor(Math.random() * 100)
            return <div className="grid grid-cols-3" key={code}>
                               <p className="text-md">{name} </p>
                               <p>
                                {value}%</p>
                <MeterStats key={code} value={value > 40 ? value : value +10} />
                </div>} )}
        </div>
    </div>
}
export default AudienceVille