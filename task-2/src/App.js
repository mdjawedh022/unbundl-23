import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Service from './Pages/Service';
import Footer from './components/Footer';
import Cartpage from './Pages/Cartpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/cart" element={<Cartpage/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
