import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Pages/Home/Products/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </Router>
      <Products></Products>
    </div>
  );
}

export default App;
