import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Projects from './component/Projects/Projects';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact Me/Contact';
import Resume from './component/Resume/Resume';

function App() {
  return (
    <Router>
      <div>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
