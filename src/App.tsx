import {Route, Switch, HashRouter as Router} from 'react-router-dom'

import {useState, useEffect} from 'react'

import Navigation from './components/Sidebar/Navigation'

import About from './components/Content/About'
import Projects from './components/Content/Projects'
import Other from './components/Content/Other'
import NotFound from './components/Content/NotFound'

import styled from 'styled-components'

const StyledApp = styled.div`
    position: relative;
    top: 20px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0px;
    margin-bottom: 0;
    width: 65%;
    display: flex;
    height: 90%;
    border-radius: 10px 10px 10px 10px;

    -webkit-box-shadow: 0 0 5px #000;
        box-shadow: 0 0 5px #000;

    -webkit-animation: fadein 1.25s;
        -moz-animation: fadein 1.25s;
        -ms-animation: fadein 1.25s;
            -o-animation: fadein 1.25s;
            animation: fadein 1.25s;

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    
    /* Widescreen Size */
    @media only screen and (min-width: 1800px) {
        width: 1170px;
    }

    /* Tablet Size */
    @media only screen and (max-width: 1200px) {
        width: 80%;
        display: block;
        overflow-y: scroll;
        overflow-x: hidden;
        background-color: white;
      }
    
    /* Mobile Size */
    @media only screen and (max-width: 800px) {
        width: 95%;
        display: block;
        overflow-y: scroll;
        overflow-x: hidden;
        background-color: white;
      }
    
    /* Tiny Size */
    @media only screen and (max-width: 350px) {
        display: none;
      }
`

//Styled Sub-Components for Main StyledApp Component
const NavContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  width: 30%;
  border-right: 1px solid black;
  text-align: center;
  background-color: #45b6fe;
  overflow: auto;
  border-radius: 10px 0px 0px 10px;

    /* Tablet Size */
  @media only screen and (max-width: 1200px) {
      width: 100%;
      border-radius: 0px 0px 0px 0px;
    }

  /* Mobile Size */
  @media only screen and (max-width: 800px) {
      width: 100%;
    }
`
const DisplayContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  width: 70%;
  padding-left: 1em;
  padding-right: 2em;
  overflow-y: scroll;
  background-color: #FFFFFF;
  border-radius: 0px 10px 10px 0px;

    /* Tablet Size */
  @media only screen and (max-width: 1200px) {
      width: 95%;
      border-radius: 0px 0px 0px 0px;
      overflow-y: hidden;
    }

  /* Mobile Size */
  @media only screen and (max-width: 800px) {
      width: 92%;
    }
`
const Footer = styled.footer`
  position: relative;
  top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  height: 0%;
  text-align: center;
  color: white;
  font-size: 14px;
`
const CreatorLink = styled.a`
  color: white;
`
const SizeWarning = styled.div`
  padding-top: 100px;
  text-align: center;
  display: none;

    /* Tiny Size */
  @media only screen and (max-width: 350px) {
      display: block;
      color: white;
    }
`

const reload = () => window.location.reload();

const App = () => {
  const [displayed, setDisplayed] = useState('About');

  useEffect(() => {
    document.getElementById('dispContainer')!.scrollTo(0, 0)
    document.getElementById('App')!.scrollTo(0, 0)
  }, [displayed]);
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <StyledApp id="App">
        <NavContainer><Navigation displayed={displayed}/></NavContainer>
        <DisplayContainer id="dispContainer">
          <Switch>
            <Route path="/" exact render={() => {return (<About updateParent={setDisplayed} />)}}/>
            <Route path="/about" render={() => {return (<About updateParent={setDisplayed}/>)}}/>
            <Route path="/projects" render={() => {return (<Projects updateParent={setDisplayed}/>)}} />
            <Route path="/other" render={() => {return (<Other updateParent={setDisplayed}/>)}} />
            <Route render={() => {return (<NotFound updateParent={setDisplayed}/>)}} />
          </Switch>
        </DisplayContainer>
      </StyledApp>
      <SizeWarning>Please View This Portfolio on a Wider Display</SizeWarning>
      <Footer>
        <p>&#11088; Created by <CreatorLink href="https://github.com/baileywjohnson/portfolio" rel="noreferrer" target="_blank">Bailey Johnson</CreatorLink></p>
      </Footer>
      <Route path="/resume.pdf" onEnter={reload} />
    </Router>
  );
}

export default App;
