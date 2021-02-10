import {Route, BrowserRouter as Router} from 'react-router-dom'

import Navigation from './components/Navigation'

import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Other from './components/Other'

import './App.css'

const reload = () => window.location.reload();

function App() {

  return (
    <Router>
      <div className="App">
        <div id="navContainer"><Navigation /></div>
        <div id="dispContainer">
          <Route path="/" exact component={About} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog} />
          <Route path="/other" component={Other} />
        </div>
      </div>
      <footer>
        <p>Created by <a href="https://github.com/baileywjohnson/portfolio" target="_blank">Bailey Johnson</a></p>
      </footer>
      <Route path="/resume.pdf" onEnter={reload} />
    </Router>
  );
}

export default App;
