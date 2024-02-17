import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import Header from "./components/Header/components";
import Footer from "./components/Footer/components";
import FreeSense from "./pages/Freesense/FreeSense";
import Blog1 from "./pages/Blog1/Blog1";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/freeSense" element={<FreeSense />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Blog1" element={<Blog1 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
