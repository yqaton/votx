import React, { Component } from 'react';
import styled from 'styled-components';

import { get_random_colour } from '../utils/colours';

const CardHolder = styled.section`
  width: 100%;
  height: ${window.innerHeight / 2 - 26}px;
  background-image: url(${props => props.avatar});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Heading = styled.h1`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 5px;
`;

const TeamCard = props => (
  <CardHolder
    style={{ backgroundColor: `${get_random_colour()}` }}
    avatar={props.avatar}
  >
    <Heading style={{ color: `${get_random_colour()}` }}>
      {props.first_name}
    </Heading>
  </CardHolder>
);

export default TeamCard;
