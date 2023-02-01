import './App.css';
import { Routes, Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Main } from './pages/main';
import { Login } from './pages/login';
import { Navbar } from './components/navbar';
import {auth , provider} from './config/firebase';
import { Createpost } from './pages/createpost';

function App() {  
  return (
    <div className="App">
      <Router>
        <div className='navbar'>
      <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<Createpost />} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
