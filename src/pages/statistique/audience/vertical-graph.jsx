import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)
export const options = {
    scales: {
        x: {
          display: true,
        },
        y: {
            display: true
        }
      },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
}
const labels = ['18-24', '25-34', '35-44', '45-54', '55-64', '65+']
export const data = {
  labels,
  datasets: [
    {
      label: 'Male',
      data: labels.map(() => Math.floor(Math.random() * 100)),
      backgroundColor: '#f06069',
    },
    {
      label: 'Female',
      data: labels.map(() => Math.floor(Math.random() * 100)),
      backgroundColor: '#733278',
    },
  ],
}

export default function VerticalGraph() {
  return <Bar options={options} data={data} />
}
