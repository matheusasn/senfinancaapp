import React from "react";
import { GlobalContextProvider } from "./context/GlobalState";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import EditRegister from "./pages/Register/edit"
import RegisterInput from "./pages/Register/RegisterInput";
import Container from './components/layout/Container'
import "./App.css"

const App = () => {
  return (
      <Router>
        <GlobalContextProvider>
          <NavBar/>
          <div className='content'>
            <Container >
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/formEntrada" element={<RegisterInput/>} />
                <Route exact path="/formEntrada/:id" element={<EditRegister/>} />
              </Routes>
            </Container>
            <Footer/>
          </div>            
        </GlobalContextProvider>
      </Router>
  );
};

export default App;
