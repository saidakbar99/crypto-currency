import { Route, Routes, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Navbar, Homepage, News, CryptoDetails, Cryptocurrencies, Exchanges} from './components'
import './App.css'

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage/>} />
              <Route path='/cryptocurrencies' element={<Cryptocurrencies/>} />
              <Route path='/exchanges' element={<Exchanges/>} />
              <Route path='/news' element={<News/>} />
              <Route path='crypto/:coinId' element={<CryptoDetails/>} />
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            Cryptoverse <br />
            All rights reserved by ©Saidakbar
          </Typography.Title>
            <Space>
              <Link to='/'>Home</Link>
              <Link to='/exchanges'>Exchanges</Link>
              <Link to='/news'>News</Link>
            </Space>
        </div>
      </div>
    </div>
  )
}

export default App;
