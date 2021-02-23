import {Route, Switch, HashRouter as Router} from 'react-router-dom'

import {useState, useEffect} from 'react'

import Navigation from './components/Sidebar/Navigation'

import About from './components/Content/About'
import Projects from './components/Content/Projects'
import Other from './components/Content/Other'
import NotFound from './components/Content/NotFound'

import './App.css'

const reload = () => window.location.reload();

function App() {

  const [displayed, setDisplayed] = useState('About');

  useEffect(() => {
    document.getElementById('dispContainer')!.scrollTo(0, 0)
    document.getElementById('App')!.scrollTo(0, 0)
  }, [displayed]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div id="App">
        <div id="navContainer"><Navigation displayed={displayed}/></div>
        <div id="dispContainer">
          <Switch>
            <Route path="/" exact render={() => {return (<About updateParent={setDisplayed} />)}}/>
            <Route path="/about" render={() => {return (<About updateParent={setDisplayed}/>)}}/>
            <Route path="/projects" render={() => {return (<Projects updateParent={setDisplayed}/>)}} />
            <Route path="/other" render={() => {return (<Other updateParent={setDisplayed}/>)}} />
            <Route render={() => {setDisplayed(''); return (<NotFound />)}} />
          </Switch>
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
