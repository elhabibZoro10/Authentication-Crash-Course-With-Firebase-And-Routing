import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import Dashboard from './components/Dashboard';
import AuthProvider from './context/AuthContext';
import RequireAuth from './context/RequireAuth';


function App() {
  return (
    <Container className='d-flex align-items-center justify-content-center'
    style={{minHeight:"100vh"}}
    >
    <div className='w-100' style={{maxWidth: "400px"}} >
      <Router>
      <AuthProvider>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/update-profile' element={
            <RequireAuth>
             <UpdateProfile/>
            </RequireAuth>
          } />
          <Route path='/' element={
            <RequireAuth>
              <Dashboard/>
            </RequireAuth>
            } />
        </Routes>
      </AuthProvider>
      </Router>
    </div>
    </Container>
  );
}

export default App;
