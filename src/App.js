import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Adress from './pages/Adress/Adress';
import Vacancies from './pages/Vacancies/Vacancies';
import Support from './pages/Support/Support';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/adress" element={<Adress/>}/>
          <Route path="/vacancies" element={<Vacancies/>}/>
          <Route path="/support" element={<Support/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

