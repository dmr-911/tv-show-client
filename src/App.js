import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Details from './Pages/Details/Details';
import AuthProvider from './context/AuthProvider';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import BuyTicket from './Pages/BuyTicket/BuyTicket';
import Orders from './Pages/Orders/Orders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="movies/:id" element={<Details></Details>}></Route>
          <Route path="buyTicket/:id" element={<BuyTicket></BuyTicket>}></Route>
          <Route path="orders" element={<Orders></Orders>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
