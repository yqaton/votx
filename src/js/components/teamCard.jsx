import React, { Component } from 'react';
import styled from 'styled-components';

import { get_random_colour } from '../utils/colours';

const CardHolder = styled.section`
  width: 100%;
  height: ${(window.innerHeight - 70) / 2}px;
  background-image: url(${props => props.avatar});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: grayscale(0.5);

  p {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 5px;
    color: black;
  }
`;
const Heading = styled.h1`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px;
`;

const TeamCard = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canVote: props.canVote
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ canVote: nextProps.canVote });
  }

  clickHandler(id) {
    console.log(id);
    if (this.state.canVote == false) return;
    this.setState({ canVote: false });
    this.props.voteHandler();
  }

  render() {
    const {
 avatar, first_name, id, votes = 1 
} = this.props;

    return (
      <CardHolder
        style={{ backgroundColor: `${get_random_colour()}` }}
        avatar={avatar}
        onClick={e => this.clickHandler(id)}
      >
        <Heading style={{ color: `${get_random_colour()}` }}>
          {first_name}
        </Heading>
        {this.state.canVote || (
          <p>
            <b>голоса:</b> {votes}
          </p>
        )}
      </CardHolder>
    );
  }
};

export default TeamCard;
