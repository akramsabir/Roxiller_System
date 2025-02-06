
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Layout/Header';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
   <>
      <Router>
        <Header/>
        <div>
          <Routes>
            <Route path='/' element = {<Dashboard/>}/>
          </Routes>
        </div>
      </Router>
     
      </>
  );
}

export default App;
