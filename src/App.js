import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import MyProvider from './context/Provider';
import QRCodeCheck from './pages/QRCodeCheck';

function App() {

  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route exact path="/" element={<QRCodeCheck />} />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
