import {BrowserRouter , Routes ,Route} from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Main from './pages/Main';
import Match from './pages/Match';
import Dhoondo from './pages/Dhoondo';
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/Main" element={<Main />} />
    <Route path="/Match" element={<Match />} />
    <Route path="/Pair" element={<Dhoondo />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
