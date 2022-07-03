import './App.css';


import Navbar from './components/Navbar';
import UpperCase from './components/UpperCaser';
import LowerCase from './components/LowerCase';
import Footer from './components/Footer';



function App() {
  return (
    
<>
  <Navbar title="TextUtils " about="About Us" />
    <div className='container my-3'>
    
      <UpperCase heading="Enter your text here to Convert in Upper Case" placeholder="Enter your Text Here"></UpperCase>
    </div>

    <div className='container my-3'>
      <LowerCase heading="Enter your text here to Convert in Lower Case" placeholder="Enter your Text Here"></LowerCase>
    </div>

    <Footer></Footer>



</>
   
  );
}

export default App;
