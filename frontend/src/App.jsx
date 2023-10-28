import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './Pages/mainPage/mainPage'
import Landing from './Pages/landing/landing'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Landing/>} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
