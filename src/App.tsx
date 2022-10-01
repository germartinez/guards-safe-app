import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ConnectSafe from 'src/components/ConnectSafe'
import Header from 'src/components/Header'
import Home from 'src/pages/Home'
import { HOME_PATHNAME } from './routes/routes'

const App = () => {
  const isAnIframe = window.self !== window.top
  console.log({isAnIframe})
  return (
    <BrowserRouter>
      <Header />
      {!isAnIframe ? (
        <ConnectSafe />
      ) : (
        <Routes>
          <Route path={HOME_PATHNAME} element={<Home />} />
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default App
