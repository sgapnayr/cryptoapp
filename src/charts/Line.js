import React, { useState } from 'react'
import { Chart as Chartjs } from 'chart.js/auto'
import { Bar, getDatasetAtEvent } from 'react-chartjs-2'
import chart from 'chart.js/dist/chart'

const BarChart = () => {
    return <div>
        <Bar data={data} />
    </div>
}

export default DoughnutChart

