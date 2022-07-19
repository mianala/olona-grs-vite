
const MeterStats = ({value}) => {
    return <meter
    min="0" max="100"
    low="40" high="50" optimum="80"
    value={value} className="h-5 w-full inline">
</meter>

}
export default MeterStats