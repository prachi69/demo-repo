import SignUp from './Components/signup';
import Login from './Components/login';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ForgotPass from './Components/forgetpass';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Forgotpass" element={<ForgotPass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
