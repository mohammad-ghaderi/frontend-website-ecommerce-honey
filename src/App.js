
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path='/product/:id' Component={ProductScreen}/>
          <Route path='/profile' Component={ProfileScreen}/>
          <Route path='/cart/id' Component={CartScreen}/>
          <Route path='/register' Component={RegisterScreen}/>
          <Route path='/login' Component={LoginScreen}/>
          <Route path='/' exact Component={HomeScreen}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
