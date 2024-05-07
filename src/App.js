import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from './components/NavBar/index';


const App = () => {
   
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/about'><About /></Route>
        <Route exact path='/skills'><Skills /></Route>
        <Route exact path='/projects'><Projects/></Route>
        <Route exact path='/contact'><Contact /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

