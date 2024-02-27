import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './Components/Pages/Service/Service';
import About from './Components/Pages/About/About';

import 'tailwindcss/tailwind.css';
import WhatsAppChatButton from './Components/Whatsapp';
function App() {
  return (
    <div className="App">
      <WhatsAppChatButton phoneNumber="0913687188" />
      <BrowserRouter >
        <Routes>

          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
