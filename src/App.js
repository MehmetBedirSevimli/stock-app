import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TableApp from './components/table/TableApp';
import Login from './components/login/Login';
import PrivateRoutes from './components/login/PrivateRoutes';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
                <Route element={<TableApp/>} path="/table"/>
            </Route>
            <Route element={<Login/>} path="/"/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;