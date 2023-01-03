import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Management from './Pages/Management/Management';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import AddItem from './Pages/AddItem/AddItem';
import Update from './Pages/Update/Update';
import About from './Pages/About/About';
import MyItems from './Pages/MyItems/MyItems';

function App() {
  return (
    <div className="">
        <Header></Header>
      {/* router page for SPA */}
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/product/:id' element={
        <RequireAuth>
          <Update></Update>
        </RequireAuth>
      }></Route>

      <Route path='/management' element={
        <RequireAuth>
          <Management></Management>
        </RequireAuth>
      }></Route>

      <Route path='/add'element={
      <RequireAuth>
        <AddItem></AddItem>
      </RequireAuth>
    }></Route>
      <Route path='/myItem'element={
      <RequireAuth>
        <MyItems></MyItems>
      </RequireAuth>
    }></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
