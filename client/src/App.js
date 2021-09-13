import React , {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './Components/Home/Home'
import NavBar from './Components/Navbar/NavBar'
import Login from './Components/Login/Login'
import Registration from './Components/Registration/Registration'
import Reservation from './Components/Reservation/Reservation'
import Footer from './Components/Footer/Footer'
import './App.css';

function App() {

  const [isAuth, setIsAuth] = useState(true);  

  return (
    <div className="App">
     
        
        <Router>
            <NavBar isAuth={isAuth} setIsAuth={setIsAuth}/>

            <div className='container'>
              <Route exact path="/" component={Home} />

          <Route path="/login">
             <Login isAuth={isAuth} setIsAuth={setIsAuth}/>
          </Route>
            
          <Route exact path="/Registration" component={Registration} />
            
          <Route path="/Reservation">
             <Reservation isAuth={isAuth} setIsAuth={setIsAuth}/>
          </Route>
          
            </div>

            <Footer />
        </Router>
    
    </div>
  );
}

export default App;
/*  test*/