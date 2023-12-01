import './App.css';
import About from './fragments/About';
import Approach from './fragments/Approach';
import Banner from './fragments/Banner';
import Footer from './fragments/Footer';
import Founder from './fragments/Founder';
import Header from './fragments/Header';

function App() {
  return (
    <div className="">
      <Header/>
      <Banner/>
      <About/>
      <Approach/>
      <Founder/>
      <Footer/>
    </div>
  );
}

export default App;
