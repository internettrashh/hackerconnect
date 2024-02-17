import {BrowserRouter , Routes ,Route} from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Main from './pages/Main';
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/Main" element={<Main />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
