import StatsWraper from "../../../components/stats/stats-wrapper"
import StatsBasic from "../../../components/stats/stats-basic"
import {BiLike} from "react-icons/bi"
import {AiOutlineInstagram} from "react-icons/ai"
import { useState } from "react"
import AudienceGender from "./aud-gender"
import { FcInfo } from "react-icons/fc"
import VerticalGraph from "./vertical-graph"
import AudienceVille from "./aud-ville"
const AudienceActuelle = () => {
    const [statsbasic, setStatsbasic] = useState([{
        title: "Mention j' aime de la page",
        icon: <BiLike className="w-6 h-6"/>,
        num: "12",
        pourcentage: "10",
        info: "like"
    },
{
    title: "Abonnes Instagram",
    icon: <AiOutlineInstagram className="w-6 h-6"/>,
    num: "20",
    pourcentage: "7",
    info: "insta"
}])
    return <div className="md:grid md:grid-cols-2 md:gap-4">
        <div>
                <StatsWraper>
                    <StatsBasic {...statsbasic[0]}/>
            </StatsWraper>
            <div className="mt-2">
        <div className="flex items-center gap-2">
        <span>Age et genre</span>
        <span className="tooltip" data-tip="gender"><FcInfo />
</span>
        </div>
    </div>

            <AudienceGender />
  <VerticalGraph />
  <div className="divider"></div>

  <AudienceVille />

        </div>
        <div>
    <StatsWraper>
        <StatsBasic {...statsbasic[1]}/>
  </StatsWraper>
  <div className="mt-2">
        <div className="flex items-center gap-2">
        <span>Age et genre</span>
        <span className="tooltip" data-tip="gender">
  <FcInfo />
</span>
        </div>
    </div>
  <AudienceGender />
  <VerticalGraph />
  <div className="divider"></div>

  <AudienceVille />

        </div>
    </div>
}
export default AudienceActuelle