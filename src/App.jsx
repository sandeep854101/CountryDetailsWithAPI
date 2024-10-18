import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './components/Page/Home';
import About from './components/Page/About';
import Contact from './components/Page/Contact';
import CountryDetails from './components/Page/CountryDetails';
import Footer from './components/common/Footer';

const App = () => {
  const [input,setInput]=useState('');
  const [page, setPage] = useState(1);
  return (
    <Router>
      <Navbar setInput={setInput} input={input} page={page} setPage={setPage} />
      <Routes>
        <Route path="/" element={<Home input={input} page={page} setPage={setPage} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/country/:name' element={<CountryDetails/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
