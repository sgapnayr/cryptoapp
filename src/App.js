import { useState, useEffect, useNavigate } from 'react'
import axios from 'axios'
import { AppHeader, Border, BorderHeader, BordersAround, BorderLeft, SideBorders, BorderRight, Charts, CoinCharts, CoinTable, ListHeader, StyledForm, StyledInput, CoinHeader, CoinList, CoinContainer, CoinDiv } from './components/app.styles'
import { Routes, Route, Link } from 'react-router-dom';
import Coin from './routes/Coin'
import LineChart from './charts/Line'
import BarChart from './charts/Bar'

const APPTITLE = () => {
  return (
    <>
      <h2>Crypto <strong>Architex</strong></h2>
    </>
  )
}

const LISTHEADER = ({ value }) => {
  return (
    <ListHeader>
      <h3>Coin <strong>{value ? value : 'List'}</strong>
      </h3>
    </ListHeader>
  )
}

const COINHEADER = ({ handleSort, isSorted }) => {
  return (
    <CoinHeader>
      <div className='grid'>#</div>
      <div className='grid'>Icon</div>
      <div className='grid'>Name</div>
      <div className='grid'>Symbol</div>
      <div className='grid price' onClick={handleSort}>Price {isSorted ? "↓" : !isSorted && isSorted !== false ? "↕" : "↑"}</div>
      <div className='grid'>24h</div>
    </CoinHeader>
  )
}

const LIST = ({ filteredCoinList, coins }) => {
  return (
    <CoinList>
      {coins && filteredCoinList?.map(coin => {
        return (
          <CoinContainer key={coin.id}>
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
                {coin.price_change_percentage_24h?.toFixed(2)} %
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
  const [isSorted, setSort] = useState(null)

  const USD_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false'

  axios.get(USD_URL).then(res => setCoins(res.data))

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSort = () => {
    switch (isSorted) {
      case null:
        setSort(false);
        break;
      case false:
        setSort(true);
        break;
      case true:
        setSort(null);
        break;
      default:
        setSort(null);
        break;
    }
  };

  const filteredCoinList = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  const renderList = () => {
    if (isSorted === true) {
      return filteredCoinList.sort((a, b) => a.current_price - b.current_price);
    } else if (isSorted === false) {
      return filteredCoinList.sort((b, a) => a.current_price - b.current_price);
    } else {
      return filteredCoinList.sort();
    }
  };

  return (
    <div className="App">
      <Border>
        <BorderHeader>
          <AppHeader>
            <APPTITLE />
          </AppHeader>
        </BorderHeader>
      </Border>
      <BordersAround>
        <CoinCharts>
          <Charts>
            <BarChart />
          </Charts>
        </CoinCharts>
        <SideBorders>
          <BorderLeft />
          <CoinTable>
            <LISTHEADER value={search} />
            <StyledForm>
              <StyledInput onChange={handleChange} placeholder='Search Crypto Here...' />
            </StyledForm>
            <COINHEADER handleSort={handleSort} isSorted={isSorted} />
            <LIST filteredCoinList={renderList()} coins={coins} />
          </CoinTable>
          <BorderRight />
        </SideBorders>
      </BordersAround>
      <div className="border">
        <div className="border-footer"></div>
      </div>
    </div>
  );
}

export default App; 