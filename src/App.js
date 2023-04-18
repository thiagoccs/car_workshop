import './style/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import MyProvider from './context/Provider';
import QRCodeCheck from './pages/QRCodeCheck';
import ServiceOrder from './pages/ServiceOrder';
import OrderCompleted from './pages/OrderCompleted';

function App() {

  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route exact path="/" element={<QRCodeCheck />} />
        </Routes>
        <Routes>
          <Route path="/serviceOrder" element={<ServiceOrder />} />
        </Routes>
        <Routes>
          <Route path="/orderCompleted" element={<OrderCompleted />} />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
