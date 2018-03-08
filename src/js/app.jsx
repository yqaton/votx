import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import Teams from './components/teamsContainer';
import NoIdInput from './components/noIdInput';
import AdminPanel from './components/adminPanel';

injectGlobal`
  body {
    margin: 0;
    background-color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

const Header = styled.header`
  background-color: #3f51b5;
  height: 70px;

  b {
    display: inline-block;
    transform: rotate(-90deg);
    margin-top: 20px;
    color: pink;
    position: absolute;
    top: 5px;
  }

  p {
    margin: 0;
    margin-left: 40px;
    text-align: center;
    display: flex;
    height: 100%;
    padding-bottom: 0;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: large;
  }
`;

const App = () => (
  <Router basename="/">
    <Fragment>
      <Header>
        <Link to="/">
          <b>VOTX</b>
        </Link>
        <p>Session: Game name</p>
        <Link to="/admin">ADM.</Link>
      </Header>
      {/* <Route path="/" component={AdminPanel} /> */}
      <Route exact path="/" component={NoIdInput} />
      <Switch>
        <Route path="/admin" component={AdminPanel} />
        <Route path="/:id" component={Teams} />
      </Switch>
    </Fragment>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
