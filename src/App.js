
import './App.scss';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom"
import {Home,SingleBlogPage} from './pages';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
       <Router>
          <NavBar/>
           <Sidebar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blogs/:id' element= {<SingleBlogPage />} />
          </Routes>
          <Footer/>
       </Router>
    </div>
  );
}

export default App;
