import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/Not Found/NotFound';
import ServiceCard from './components/Service Card/ServiceCard';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Appointment from './components/Appointment Form/Appointment';
import ServiceDetails from './components/ServiceDetails/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import ServiceCard2 from './components/Service Card/ServiceCard2';
import ServiceCard3 from './components/Service Card/ServiceCard3';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Home></Home>
          <Switch>
            <Route exact path="/">

              <ServiceCard></ServiceCard>
              <ServiceCard2></ServiceCard2>
              <ServiceCard3></ServiceCard3>
              <Footer></Footer>
            </Route>
            <Route path="/home">

              <ServiceCard></ServiceCard>
              <ServiceCard2></ServiceCard2>
              <Footer></Footer>
            </Route>
            <Route path="/about">

              <About></About>
              <Footer></Footer>
            </Route>
            <Route path="/services">


              <Footer></Footer>
            </Route>
            <Route path="/service/:serviceId">

              <ServiceDetails></ServiceDetails>

            </Route>
            <Route path="/appointment">

              <Appointment></Appointment>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
