import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";

import {Container} from 'react-bootstrap'

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import ProductScreen from "./Screens/ProductScreen";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <main className="py-5">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen/>} exact/>
              <Route path="/product/:id" element={<ProductScreen/>} exact/>
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>

  )
}

export default App