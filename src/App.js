import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Conversioncost from './components/Conversioncost'
import Copq from './components/Copq'
import Kaizen from './components/Kaizen'
import Otd from './components/Otd'
import Production from './components/Production'
import Safety from './components/Safety'
import Nopage from './components/Nopage'
import {SfNav} from 'react-sf-building-blocks'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route index  path='/' element={<Home/>}/>
        <Route path='/conversion-cost' element={<Conversioncost/>}/>
        <Route path='/copq' element={<Copq/>}/>
        <Route path='/kaizen' element={<Kaizen/>}/>
        <Route path='/otd' element={<Otd/>}/>
        <Route path='/production' element={<Production/>}/>
        <Route path='/safety' element={<Safety/>}/>
        <Route path='*' element={<Nopage/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
