import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import NotFound from './pages/NotFound/NotFound';
import Catalog from './pages/Catalog/Catalog';
import Iphone from './pages/Iphone/Iphone';
import MacBook from './pages/MacBook/MacBook';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main pageName="Main Page"/>}/>
          <Route path="/about" element={<About text="Here is the info about us"/>}/>
          <Route path="/contacts" element={<Contacts phone="Here you can find our contacts:)"/>}/>
          <Route path="/catalog" element={<Catalog/>}>
            <Route path="iphone" element={<Iphone/>}/>
            <Route path="macBook" element={<MacBook/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}


// localhost:3000/catalog - Catalog
// localhost:3000/catalog/iphone - Iphone
// localhost:3000/catalog/iphone/macbook - MacBook



export default App;

