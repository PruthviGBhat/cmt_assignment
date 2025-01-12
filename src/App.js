import './App.css';
import Home from './Components/Home.js';
import Form from './Components/Form.js';
import Display from './Components/Display.js';
import UserDetail from './Components/UserDetail.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/details" element={<Display />} />
        <Route path='/UserDetail' element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;