
import {FcInfo} from 'react-icons/fc'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  import { Line } from 'react-chartjs-2'


export const options = {responsive: true,
    scales: {
        x: {
          display: false,
        },
        y: {
            display: false
        }
      }
}
export function TablePublication({
  value,
  name,
  stats,
  icon
}) {
  return <div className="relative block p-3 border max-w-xs min-h-[200px]" href="" key={value}>
          
            <div className="justify-between sm:flex items-center">
            
                <h6 className="text-sm font-bold text-gray-900">
                  {name}
                </h6>
               
                
            
                <div className="tooltip" data-tip="hello">
                    <FcInfo />
                </div>
            </div>
             {stats === null ? <div className='grid place-items-center py-5 gap-4'>
                    {icon}
                    <p className='text-center mt-1 text-xs font-medium text-stone-400'>Nous n' avons pas suffisament de donnes a afficher pour cette periode</p>
                </div> : <>
                <div className="stat place-items-center p-1">
                    <div className="stat-value text-lg">{Math.floor(Math.random() * 1000)}</div>
                    <div className="stat-desc text-error">↗︎ {Math.floor(Math.random() * 100)} ({Math.floor(Math.random() * 100)}%)</div>
                </div>
  
                <div className='min-h-[80px] relative grid'>
                    <Line options={options} data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [// {
          //     label: "past",
          //     data: ['January', 'February', 'March', 'April', 'May', 'June', 'July'].map(() => Math.floor(Math.random() * (1000 - -1000 + 1)) + -1000),
          //     borderColor: 'rgb(255, 99, 132)',
          //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
          // },
          {
            label: name,
            data: ['January', 'February', 'March', 'April', 'May', 'June', 'July'].map(() => Math.floor(Math.random() * (500 - -500 + 1)) + -500),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)'
          }]
        }} />
                    </div> 
                    </>}
          
          </div>;
}
  