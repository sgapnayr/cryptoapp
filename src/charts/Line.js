import React, { useState } from 'react'
import { Chart as Chartjs } from 'chart.js/auto'
import { Line, getDatasetAtEvent } from 'react-chartjs-2'
import chart from 'chart.js/dist/chart'
import axios from 'axios'

const data = [
    {
        data: 1,
        price: 2
    },
    {
        data: 2,
        price: 3
    },
    {
        data: 3,
        price: 1
    }
]

function DoughnutChart() {
    const [userData, setUserData] = useState({
        labels: data.map(data => data.data),
        datasets: [{
            label: 'Coins',
            backgroundColor: '#60c9ec',
            borderColor: '#60c9ec',
            data: data.map(data => data.price),
        }]
    })
    return (
        <div>
            <Line data={userData} />
        </div>
    )
}

export default DoughnutChart

