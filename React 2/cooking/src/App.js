import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import Categories from './Components/Categories/Categories';
import Recipe from './Components/Recipe/Recipe';
import Extra from './Components/Extra/Extra'
import Checkout from './Components/Checkout/Checkout'
import Gallery from './Components/Gallery/Gallery';
import Inbox from './Components/Inbox/Inbox';
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <>
    <Navbar/> 
    <Slider/>
    <Categories/>
    <Recipe/>
    <Extra/>
    <Checkout/>
    <Gallery/>
    <Inbox/>
    <Footer/>
    
  </>
  );
}

export default App;
