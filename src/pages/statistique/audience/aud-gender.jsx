import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: ['Femmes', 'Hommes'],
  datasets: [
    {
      label: '# of Votes',
      data: [19, 12],
      backgroundColor: [
          '#f06069',
          '#733278',
      ],
      borderColor: [
          '#f06069',
          '#733278',
      ],
      borderWidth: 1,
    },
  ],
}

export default function AuthGender() {
  return <div className='max-w-[300px]'>
        <Doughnut data={data} options={{responsive: true}} />
    </div>
}

