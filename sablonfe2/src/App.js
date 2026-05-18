import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SingleHangszer from './SingleHangszer';
import PostHangszer from './PostHangszer';
import NavBar from './NavBar';
import PutHangszer from './PutHangszer';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:id' element={<SingleHangszer/>}/>
          <Route path='/ujHangszer' element={<PostHangszer/>}/>
          <Route path='/modosit/:id' element={<PutHangszer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
