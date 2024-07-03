
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';

import Home from './pages/Home.js'
import Sobre from './pages/Sobre.js'
import Contato from './pages/Contato.js'
import Circuito from './pages/Circuitos.js'
import pageNotFound from './pages/pageNotFound.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route exact path='/sobre' element={<Sobre/>}></Route>
          <Route exact path='/contato' element={<Contato/>}></Route>
          <Route exact path='/circuito' element={<Circuito/>}></Route>
          <Route exact path='/*' element={<pageNotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
