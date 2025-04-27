import './App.css';
import Navbar from './compenents/Navbar';
import Menu from './compenents/Menu';
import Header from './compenents/Header';
import Home from './compenents/Home';
import Body from './compenents/Body';
import Footer from './compenents/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutUs from './compenents/about/About';
import Contact from './compenents/contact/Contact';
import Events from './compenents/events/Events';

function App() {
  return (
    <>
    <Router>
    <Menu/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<> <Header/> <Home/> <Body/> </>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
