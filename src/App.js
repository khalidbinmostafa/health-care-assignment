import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/Not Found/NotFound';
import ServiceCard from './components/Service Card/ServiceCard';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Appointment from './components/Appointment Form/Appointment';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            <ServiceCard></ServiceCard>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Home></Home>
            <ServiceCard></ServiceCard>
            <Footer></Footer>
          </Route>
          <Route path="/about">
            <Home></Home>
            <About></About>
            <Footer></Footer>
          </Route>
          <Route path="/service">
            <Home></Home>
            <ServiceCard></ServiceCard>
            <Footer></Footer>
          </Route>
          <Route path="/appointment">
            <Home></Home>
            <Appointment></Appointment>
            <Footer></Footer>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
