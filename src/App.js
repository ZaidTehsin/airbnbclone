
import './App.css';
import Contact from './Components/Contact';
import Card from './Components/Card';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    
  <Navbar/>
  <Hero/>
  <Card/>
  <Contact 
  img="./ImagesPublic/image 12.png"
  rating="10"
  firstline="Life Lessons"
  secondline="From 155$"
  />
  <Contact
  img="./ImagesPublic/image 12.png"
  rating="12"
  firstline="Must be"
  secondline="From 175$"
  />
  <Contact
  img="./ImagesPublic/image 12.png"
  rating="14"
  firstline="Hard enough"
  secondline="From 185$"
  />
  <Contact
  img="./ImagesPublic/image 12.png"
  rating="10"
  firstline="For you"
  secondline="From 205$"
  />
  
  </>
  );
}

export default App;
