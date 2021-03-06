import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";

import {Container} from 'react-bootstrap'
import { useSelector } from "react-redux";
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import ProductScreen from "./Screens/ProductScreen";
import LoginModal from "./components/LoginModalComponent";
import RegisterModalComponent from "./components/RegisterModalComponent"
import Contact from "./components/Contact";
import Cart from "./components/Cart";

function App() {
  const value = useSelector((state) => state.modal.value)
  const registerValue = useSelector((state) => state.registerModal.value)

  return (
    <Router>
      <div>
            {value && <LoginModal />}
            {registerValue && <RegisterModalComponent />}
            {!value && !registerValue && <Header />}
        <main className="py-5">
            <Container>
              <Routes>
                {!value && !registerValue && <Route path="/eCommerceWebshop.github.io" element={<HomeScreen/>} exact/>}
                {!registerValue && !value && <Route path="/eCommerceWebshop.github.io/product/:id" element={<ProductScreen/>} exact/>}
                <Route path="/eCommerceWebshop.github.io/contact" element ={<Contact />} />
                <Route path="/eCommerceWebshop.github.io/cart" element ={<Cart />} />
                <Route path="http://localhost:3000/eCommerceWebshop.github.io?" element={<HomeScreen />} />
                <Route path="https://hubertkobos.github.io/eCommerceWebshop.github.io/contact?" element={<HomeScreen />} />
                <Route path="https://hubertkobos.github.io/eCommerceWebshop.github.io/cart?" element={<HomeScreen />} />
              </Routes>
            </Container>
        </main>
        <Footer />
      </div>
    </Router>

  )
}

export default App