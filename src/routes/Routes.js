import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu from './Menu';
import Login from '../pages/Login';
import Principal from '../pages/Principal';
import DocumentoElectronico from '../pages/DocumentoElectronico';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/documentoelectronico" element={<DocumentoElectronico/>}/>
        <Route path="/principal" element={<Principal/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
