import React from 'react';
import ReactDOM from 'react-dom';

import styled, { injectGlobal } from 'styled-components';

import Teams from './Components/teamsContainer';

injectGlobal`
  body {
    margin: 0;
    background-color: black;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

const Header = styled.header`
  color: pink;
  text-align: center;
  padding-bottom: 10px;
  background: royalblue;
  background: linear-gradient(
    to right,
    #fc6262 0%,
    #e0b153 12%,
    #ceb746 26%,
    #94f23c 45%,
    #3ae868 68%,
    #3acdea 88%,
    #5581e8 100%
  );
  max-height: 52px;

  i {
    display: block;
    background: black;
    padding: 10px;
  }
`;

const App = class extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <i>VOTX</i>
        </Header>
        <Teams nav_height={this.header} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
