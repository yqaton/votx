import React, { Component } from "react";
import styled from "styled-components";
import styledComponentsTS from "styled-components-ts";

import { get_random_colour } from "../utils/colours";

type CardHolderProps = {
  avatar: string;
};

const CardHolder = styled("section")`
  width: 100%;
  height: ${(window.innerHeight - 70) / 2}px;
  background-image: url(${(props: CardHolderProps) => props.avatar});
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

export interface ITeam {
  key?: number;
  avatar: string;
  first_name: string;
  id: number;
  votes: number;
  canVote: boolean;
  voteHandler: () => void;
}

class TeamCard extends React.Component<ITeam, { canVote: boolean }> {
  constructor(props: ITeam) {
    super(props);

    this.state = {
      canVote: props.canVote
    };
  }

  componentWillReceiveProps(nextProps: ITeam) {
    this.setState({ canVote: nextProps.canVote });
  }

  clickHandler(id: Number) {
    if (this.state.canVote == false) return;
    this.setState({ canVote: false });
    this.props.voteHandler();
  }

  render() {
    const { avatar, first_name, id, votes = 1 } = this.props;

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
}

export default TeamCard;
