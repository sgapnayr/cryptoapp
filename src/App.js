import { useState } from 'react'
import './App.css';
import axios from 'axios'
import { AppHeader, BlankHeader, CoinCharts, CoinTable, ListHeader, StyledInput, CoinHeader, CoinList, CoinContainer, CoinDiv } from './components/app.styles'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LineChart from './charts/Line'
import BarChart from './charts/Bar'

const LISTHEADER = ({ value }) => {
  return (
    <ListHeader>
      <h3>Coin <bold>{value ? value : 'List'}</bold>
      </h3>
    </ListHeader>
  )
}

const COINHEADER = () => {
  return (
    <CoinHeader>
      <div className='number'>#</div>
      <div>Icon</div>
      <div>Name</div>
      <div>Symbol</div>
      <div>Price</div>
      <div>24h</div>
    </CoinHeader>
  )
}

const LIST = ({ coins }) => {
  return (
    <CoinList>
      {coins.map(coin => {
        return (
          <CoinContainer>
            <CoinDiv>
              {coins.indexOf(coin) + 1}
            </CoinDiv>
            <CoinDiv>
              <img src={coin.image} alt="Crypto" />
            </CoinDiv>
            <CoinDiv>
              {coin.name}
            </CoinDiv>
            <CoinDiv>
              ({coin.symbol.toUpperCase()})
            </CoinDiv>
            <CoinDiv>
              <h4>
                $
                {coin.current_price.toLocaleString()}
              </h4>
            </CoinDiv>
            <CoinDiv>
              <div className={coin.price_change_percentage_24h > 0 ? 'green' : 'red'} >
                {coin.price_change_percentage_24h.toFixed(2)} %
              </div>
            </CoinDiv>
          </CoinContainer>
        )
      })}
    </CoinList>
  )
}

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  const USD_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  axios.get(USD_URL).then(res => setCoins(res.data)).catch(err => console.log('Error'))

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoinList = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="App">

      <div className="border">
        <div className="border-header">
          <AppHeader>
            <h2>Crypto <strong>Architex</strong></h2>
          </AppHeader>
        </div>
      </div>

      <div className="border-around">

        <CoinCharts>
          <div className='Charts'>
            <LineChart />
          </div>
          <div className='Charts'>
            <BarChart />
          </div>
        </CoinCharts>

        <div className="side-borders">
          <div className="border-left"></div>
          <CoinTable>
            <LISTHEADER value={search} />
            <form>
              <StyledInput onChange={handleChange} placeholder='Search Crypto Here...' />
            </form>
            <COINHEADER />


            <LIST coins={filteredCoinList} />
          </CoinTable>
          <div className="border-right"></div>
        </div>

      </div>

      <div className="border">
        <div className="border-footer">
        </div>
      </div>

    </div>
  );
}

export default App; 