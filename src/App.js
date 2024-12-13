import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/landing'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Landing/> } />

      </Routes>
    </Router>
  );
}

export default App;
