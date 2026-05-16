import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OsszesSzallas from './OsszesSzallas';
import EgySzallas from './EgySzallas';
import UjSzallas from './UjSzallas';

function App() {
  return (
    <div>
      <BrowserRouter>


        <Routes>
          <Route path="/" element={<OsszesSzallas/>}/>
          <Route path="/szallas/:id" element={<EgySzallas/>}></Route>
          <Route path="uj-szallas" element={<UjSzallas/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
