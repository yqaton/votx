import React, { Component } from 'react';
import styled from 'styled-components';

import { get_random_colour } from '../utils/colours';

const CardHolder = styled.section`
  width: 100%;
  height: ${(window.innerHeight - 52) / 2}px;
  background-image: url(${props => props.avatar});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(0.5);
`;
const Heading = styled.h1`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 5px;
`;

const TeamCard = class extends React.Component {
  clickHandler(id) {
    console.log(id);
  }
  render() {
    const { avatar, first_name, id } = this.props;

    return (
      <CardHolder
        style={{ backgroundColor: `${get_random_colour()}` }}
        avatar={avatar}
        onClick={e => this.clickHandler(id)}
      >
        <Heading style={{ color: `${get_random_colour()}` }}>
          {first_name}
        </Heading>
      </CardHolder>
    );
  }
};

export default TeamCard;
