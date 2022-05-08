
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Service from './components/Service/Service';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/services" element={<Service/>}></Route>
        {/* <Route path="/about" element={<About />}></Route> */}
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
