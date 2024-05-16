import './App.css'

import  Home  from './pages/Home';
import DataLoggerLanding from './pages/DataLoggerLanding';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datalogger" element={<DataLoggerLanding />} />
        </Routes>
      </>
    </Router>
    </>
  )
}

export default App
