import React, { Component, Fragment } from 'react';
import 'whatwg-fetch';

import TeamCard from './teamCard';

const fch = id => fetch(`https://reqres.in/api/users/${id}`);

class Teams extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      teams: [],
      canVote: true
    };

    this.voteHandler = this.voteHandler.bind(this);
  }
  voteHandler() {
    this.setState({ canVote: false });
  }
  componentDidMount() {
    const teams = this.state.teams;
    const saveTeam = teams => this.setState({ teams });

    [1, 2].forEach((e) => {
      fch(e)
        .then(res => res.json())
        .then((json) => {
          teams.push(json.data);

          if (teams.length > 1) saveTeam(teams);
        });
    });
  }

  render() {
    const result = this.state.teams.map(t => (
      <TeamCard
        key={t.id}
        canVote={this.state.canVote}
        voteHandler={this.voteHandler}
        {...t}
      />
    ));

    return <Fragment>{result.length > 0 ? result : 'Loading'}</Fragment>;
  }
}

export default Teams;
