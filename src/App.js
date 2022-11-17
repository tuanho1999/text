
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './components/ProductCard/card';
import Form from './components/ProductForm/form';
import Head from './components/navigatebar/head';
import CardAlls from './components/ProductCard/cardAlls';

function App() {
  return (
    <div className="App">
      <div className='head-container'>
        <Head />
        
      </div>
      
      <Routes>
        <Route path="/add" element={<Form />} />
        <Route path="/products" element={<CardAlls />} />
      </Routes>
      
    </div>
  );
}

export default App;
