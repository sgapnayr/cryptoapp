import React, { useEffect, useState } from 'react'
import { Chart as Chartjs } from 'chart.js/auto'
import { Bar, getDatasetAtEvent } from 'react-chartjs-2'
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
        price: 4
    }
]

function BarChart() {
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
            <Bar data={userData} />
        </div>
    )
}

export default BarChart
