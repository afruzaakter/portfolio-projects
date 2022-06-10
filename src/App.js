
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home';
import Skills from './Pages/Home/Skills';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
  
    </div>
  );
}

export default App;
