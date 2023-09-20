
import './App.css';
import NavB from './components/NavB';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
   <BrowserRouter>
   <NavB/>
  <Routes>
  <Route path="/" element={<HomePage/>} />
  </Routes>
   </BrowserRouter>
  );
}

export default App;
