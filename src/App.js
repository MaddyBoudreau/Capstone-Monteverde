import ProductScreen from './containers/products/ProductScreen'
import CartScreen from './containers/cart/CartScreen'
import NavBar from './containers/navbar/NavBar'
import './App.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Routes } from 'react-router-dom'

function App() {
  return (
    
    <Router>
      <div className="App">
        <NavBar />    
        <Routes>
        <Route exact path="/products" element={<ProductScreen />} />
        <Route exact path="/cart" element={<CartScreen />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App