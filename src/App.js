import './App.css';


import Navbar from './components/Navbar';
import UpperCase from './components/UpperCase';

import Footer from './components/Footer';



function App() {
  return (
    
<>
  <Navbar title="TextUtils " about="About Us" />
    <div className='container my-3'>
    
      <UpperCase heading="Enter your text here " placeholder="Enter your Text Here"></UpperCase>
    </div>


    <Footer></Footer>



</>
   
  );
}

export default App;
