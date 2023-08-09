

import { BrowserRouter as Router, Route,    Routes } from 'react-router-dom'
import Navbar from './components/Navigation'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import CategoryPage from './pages/CategoryPage'
import AllProductsPage from './pages/AllProductsPage'
import CheckoutPage from './pages/CheckoutPage'
import CheckoutForm from './pages/CheckoutForm'
import Appbar from './components/Navbar'

function App() {
  

  return (
    
  
    <Router>
      <div>
        <Navbar />
        <Appbar />
        
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/AllProductsPage' element={<AllProductsPage />} />
          <Route path='/DetailPage/:id' element={< DetailPage />} />
          <Route path='/CheckoutPage' element={< CheckoutPage />} />
          <Route path='/CheckoutForm' element={< CheckoutForm />} />
          <Route path='/CategoryPage/:categoria' element={< CategoryPage />} />
   
        </Routes>
      </div>
      
    </Router>
    
    
  )
  
};

export default App
