import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Coin = (props) => {
    const params = useParams()
    const [coin, setCoin] = useState({})

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(async () => await axios.get(url).then(res => setCoin(res.data)).catch(err => { console.log(err) }), [])

    return (
        <div>{coin.id}</div>
    )
}

export default Coin