
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs';
import About from './Pages/Home/About';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import ProjectDetails from './Pages/Home/ProjectDetails';
import Projects from './Pages/Home/Projects';
import Services from './Pages/Home/Services';
import Skills from './Pages/Home/Skills';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/projectdetails/:id' element={<ProjectDetails></ProjectDetails>}></Route>
        
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
  
    </div>
  );
}

export default App;
