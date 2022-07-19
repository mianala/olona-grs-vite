import {FcInfo} from 'react-icons/fc'
const StatsBasic = ({title, num, pourcentage, icon, info}) => {
    return (
        <div className="stat">
    <div className="stat-figure text-primary">
      {icon}
    </div>
    <div > 

    <span className="stat-title">{title}</span>
    <span className="tooltip tooltip-bottom" data-tip={info}>
  <FcInfo />
</span>
    </div>
    <div className="stat-value text-accent">{num}</div>
    <div className="stat-desc">{pourcentage}% more than last month</div>
  </div>
    )
}
export default StatsBasic