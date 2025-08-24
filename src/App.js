import './App.css';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shirts from './components/Shirts';
import Shirtdetails from './components/Shirtdetails';
import Doppyshirt from './components/Dobbyshirt';
import Overshirt from './components/Overshirt';
import Dressshirt from './components/Dressshirt';
import Btt from './components/Btt';
// import Sidebar from './components/Sidebar';
import Pants1 from './components/Pants1';
import Pants2 from './components/Pants2';
import Suit from './components/Suit';
import Pants from './components/Pants';
import Suit1 from './components/Suit1';
import Suit2 from './components/Suit2';
import Suit3 from './components/Suit3';
import Suit4 from './components/Suit4';
import Suit5 from './components/Suit5';
import Knit from './components/Knit';
import Knit1 from './components/Knit1';
import Knit2 from './components/Knit2';
import Knit3 from './components/Knit3';
import Knit4 from './components/Knit4';
import Womenwear from './components/Womenwear';
import Womenwear1 from './components/Womenwear1';
import Womenswear2 from './components/Womenswear2';
import Womenswear3 from './components/Womenswear3';
import Womenswear4 from './components/Womenswear4';
import Womenswear5 from './components/Womenswear5';
import Knit6 from './components/Knit6';
import Sidebar2 from './components/Sidebar2';
import MensWear from './components/MenWear';
import Kidswear from './components/Kidswear';
import Sport from './components/Sport';
import Sport1 from './components/Sport1';
import Prints from './components/Prints';
import Print1 from './components/Print1';
import Note from './components/Note';
import Print2 from './components/Print2';
import Print3 from './components/Print3';
import Print4 from './components/Print4';
import Print5 from './components/Print5';
import Exclusive from './components/Exclusive';
import Partners from './components/Partners';
import Contactus from './components/Contactus';
import Fabric from './components/Fabric';
import International from './components/International';
import Notedetails from './components/Notedetails';




function App() {
  return (
  <Router>
    <Note />
    <Navbar />
    <Routes>
        <Route path='/' element={
          <div>
              <Logo />
              <Footer />
          </div>
        }/>
        <Route path='/aboutus' element={
          <div> 
            <Aboutus />
            <Footer />
          </div>
        }/>
        <Route path='/shirts' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Shirts />
          </div>
        }/>
        <Route path='/shirtdetails' element={
          <div>
            <div>
            </div>
          <div className='d-flex'>
            <Sidebar2 />
            <Shirtdetails />
          </div>
            
          </div>
        }/>
        <Route path='/dobbyshirt' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Doppyshirt/>
          </div>
        }/>
          <Route path='/overshirt' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Overshirt/>
          </div>
        }/>
        <Route path='/dressshirt' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Dressshirt/>
          </div>
        }/>
        <Route path='/btt' element={
          <div> 
            <div className='d-flex'>
              <Sidebar2/>
              <Btt/>
            </div>
          </div>
        }/>
        <Route path='/trousers' element={
          <div> 
            <div>
            </div>
            <div className='d-flex'>
              <Sidebar2 />
            <Pants />
            {/* <Sidebar /> */}
            </div>
          </div>
        }/>
        <Route path='/suits' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Suit />
          </div>
        }/>
        <Route path='/pants1' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Pants1 />
          </div>
        }/>
        <Route path='/pants2' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Pants2 />
          </div>
        }/>
        <Route path='/suit1' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Suit1 />
          </div>
        }/>
        <Route path='/suit2' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Suit2 />
          </div>
        }/>
        <Route path='/suit3' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Suit3 />
          </div>
        }/>
        <Route path='/suit4' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Suit4 />
          </div>
        }/>
        <Route path='/suit5' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Suit5 />
          </div>
        }/>
        <Route path='/menwear' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <MensWear />
          </div>
        }/>
        <Route path='/kidswear' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Kidswear />
          </div>
        }/>
        <Route path='/sportwear' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Sport />
          </div>
        }/>
          <Route path='/sport1' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Sport1 />
          </div>
        }/>
          <Route path='/prints' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Prints />
          </div>
        }/>
        <Route path='/knitting' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Knit />
          </div>
        }/>
          <Route path='/knit1' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Knit1 />
          </div>
        }/>
        <Route path='/knit2' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Knit2 />
          </div>
        }/>
        <Route path='/knit3' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Knit3 />
          </div>
        }/>
        <Route path='/knit4' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Knit4 />
          </div>
        }/>
        <Route path='/knit6' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Knit6 />
          </div>
        }/>
        <Route path='/print1' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Print1 />
          </div>
        }/>
        <Route path='/print2' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Print2 />
          </div>
        }/>
        <Route path='/print3' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Print3 />
          </div>
        }/>
        <Route path='/print4' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Print4 />
          </div>
        }/>
        <Route path='/print5' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Print5 />
          </div>
        }/>
        <Route path='/exclusive' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Exclusive />
          </div>
        }/>
        <Route path='/partner' element={
          <div> 
            <Partners />
          </div>
        }/>
        <Route path='/contact' element={
          <div> 
            <Contactus />
            <Footer/>
          </div>
        }/>
        <Route path='/fabric' element={
          <div> 
            <Fabric />
          </div>
        }/>
        <Route path='/womenswear' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Womenwear />
          </div>
        }/>
        <Route path='/womenwear1' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Womenwear1 />
          </div>
        }/>
          <Route path='/womenswear2' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Womenswear2 />
          </div>
        }/>
          <Route path='/womenswear3' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Womenswear3 />
          </div>
        }/>
          <Route path='/womenswear4' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Womenswear4 />
          </div>
        }/>
          <Route path='/womenswear5' element={
          <div className='d-flex'> 
            <Sidebar2 />
            <Womenswear5 />
          </div>
        }/>
        <Route path='/international' element={
          <div className='d-flex'> 
            <International />
          </div>
          
        }/>
          <Route path='/invitation' element={
          <div className='d-flex'> 
            <Notedetails />
          </div>
          
        }/>
    </Routes>
  </Router>
  );
}

export default App;
