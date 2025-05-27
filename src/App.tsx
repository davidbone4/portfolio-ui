import './style/App.css'
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import './style/animations.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
