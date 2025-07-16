import React from 'react';
import NavBar2 from "./components/NavBar2";
import NavBar1 from './components/NavBar1';
import News from './components/News';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='App'>
      <BrowserRouter>
        <NavBar1 />
        <NavBar2 />

        <div className='container'>
          <div className='row'>
            <div className='col-md'>
              <Routes>
                {/* news component where unique key general and one main props is category */}
                {/* default because here the path is "/" */}
                <Route path='/' element={<News key={"general"} category={"general"} />} />
                {/* second specific */}
                {/* when user clicks on path("entertainment") means on entertainment button then what we will
                see on entertainment click we take that click through path if path (click) === entertainment then
                shows this means shows news component where category props is entertainment
                */}
                {/* news component but category changes key is default that is uniwue and second is category */}
                <Route path="/Entertainment" element={<News key={"entertainment"} category={"entertainment"} />} />
                {/* when user clicks on path("technology") means on technology button then what we will
                see on technology click we take that click through path if path (click) === technology then
                shows this means shows news component where category props is technology
                */}
                {/* third is news component where category is technology */}
                <Route path="/Technology" element={<News key={"technology"} category={"technology"} />} />
                <Route path="/Sports" element={<News key={"sports"} category={"sports"} />} />
                <Route path="/Business" element={<News key={"business"} category={"business"} />} />
                <Route path="/Health" element={<News key={"health"} category={"health"} />} />
                <Route path="/Science" element={<News key={"science"} category={"science"} />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
