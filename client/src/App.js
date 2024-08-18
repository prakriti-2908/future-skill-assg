import './App.css';
import ElementContainer from './Components/ElementContainer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Footerr from './Components/Footer';
import { SearchProvider } from './Components/SearchContext';
import { CardProvider } from './Components/CardContext';

function App() {
  return (
    <div className="App">
      <CardProvider>
      <Navbar/>
      <SearchProvider>
        <Hero/>
        <ElementContainer/>
      </SearchProvider>
      <Footerr/>
      </CardProvider>
    </div>
  );
}

export default App;
