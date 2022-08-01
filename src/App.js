import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Footer from './components/Footer';

function App() {
 return (
    <>
      <Navbar title="EditText " about="About Us" />
   
        <div className='container my-3'>
          <Text heading="Enter your text here " placeholder="Enter your Text Here"></Text>
        </div>
        
        <div className='container my-3'>
          <Footer></Footer>
        </div>
    </>
   
  );
}

export default App;
