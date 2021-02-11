import {Route, BrowserRouter as Router} from 'react-router-dom'

import {useState} from 'react'

import Navigation from './components/Navigation'

import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Other from './components/Other'

import './App.css'

const reload = () => window.location.reload();

function App() {

  const [displayed, setDisplayed] = useState('About');

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <div id="navContainer"><Navigation displayed={displayed}/></div>
        <div id="dispContainer">
          <Route path="/" exact render={() => {setDisplayed('About'); return (<About />)}}/>
          <Route path="/about" render={() => {setDisplayed('About'); return (<About />)}}/>
          <Route path="/projects" render={() => {setDisplayed('Projects'); return (<Projects />)}} />
          <Route path="/blog" render={() => {setDisplayed('Blog'); return (<Blog />)}} />
          <Route path="/other" render={() => {setDisplayed('Other'); return (<Other />)}} />
        </div>
      </div>
      <footer>
        <p>&#11088; Created by <a id="creatorLink" href="https://github.com/baileywjohnson/portfolio" rel="noreferrer" target="_blank">Bailey Johnson</a></p>
      </footer>
      <Route path="/resume.pdf" onEnter={reload} />
    </Router>
  );
}

export default App;
