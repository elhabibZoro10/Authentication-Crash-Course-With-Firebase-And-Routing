import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap';
import Signup from './components/Signup';


function App() {
  return (
    <Container className='d-flex align-items-center justify-content-center'
    style={{minHeight:"100vh"}}
    >
    <div className='w-100' style={{maxWidth: "400px"}} >
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/update-profile' element={<UpdateProfile/>} />
          <Route path='/' element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
    </Container>
  );
}

export default App;
