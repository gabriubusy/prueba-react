import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'


const BarCharts = ({chartData}) => {
  return (
    <div className='bg-gray-300 p-4 rounded-3xl'>
        <span className='font-bold text-xl'>Puntos de base</span>
        <Bar data={chartData}/>
    </div>
  )
}

export default BarCharts