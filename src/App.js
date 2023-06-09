import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, SingleBlog, Login } from "./pages";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Sidebar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
