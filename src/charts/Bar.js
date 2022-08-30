import React, { useEffect, useState } from 'react'
import { Charts } from '../components/app.styles'
import { Chart as Chartjs } from 'chart.js/auto'
import { Line, Bar, getDatasetAtEvent } from 'react-chartjs-2'
import axios from 'axios'

function BarChart() {
    const [apiData, setApiData] = useState([])
    const url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30'

    async function GetData() {
        const { data } = await axios.get(url)
        setApiData(data)
    }

    useEffect(() => {
        GetData()
    }, [])

    const volumeData = apiData.prices.map(el => el[1])
    const volumeLabels = apiData.total_volumes.map(el => new Date(el[0]).getDate().toString()).map(el => el.length === 1 ? `0${el}` : el)

    const data = {
        labels: volumeLabels,
        datasets: [{
            label: 'Crypto',
            backgroundColor: '#60c9ec',
            borderColor: '#60c9ec',
            data: volumeData
        }]
    }
    return (
        <Charts>
            <Line data={data} />
            <Bar data={data} />
        </Charts>
    )
}

export default BarChart
