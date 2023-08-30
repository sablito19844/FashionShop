import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Categories from './pages/Categories'
import ProductPage from './pages/ProductPage'
import All from './components/categories-pages/All'
import CasualWear from './components/categories-pages/CasualWear'
import FormalWear from './components/categories-pages/FormalWear'
import Sportswear from './components/categories-pages/Sportswear'
import Accessories from './components/categories-pages/Accessories'
import "./App.css"

const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='categories' element={<Categories />}>
          <Route path='all' element={<All />} />
          <Route path='casualWear' element={<CasualWear />} />
          <Route path='formalWear' element={<FormalWear />} />
          <Route path='sportswear' element={<Sportswear />} />
          <Route path='accessories' element={<Accessories />} />
        </Route>
        <Route path='/product-page' element={<ProductPage />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App