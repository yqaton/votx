import React from "react";
import Select from "react-select";
import styled from "styled-components";
import "react-select/dist/react-select.css";

import Button from "../styled/buttton";

const SelectHolders = styled.section`
  .Select-control {
    margin-bottom: 0;
  }
  .Select-menu-outer {
    margin-top: 0;
  }
`;

interface ITeam {
  avatar: string;
  first_name: string;
  id: number;
}

interface IChoice {
  id: number;
  value: string | number;
  label: string;
}

interface ISessionState {
  teams: ITeam[];
  selectedTeam1: IChoice | undefined;
  selectedTeam2: IChoice | undefined;
}

class Session extends React.Component<{}, ISessionState> {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      selectedTeam1: undefined,
      selectedTeam2: undefined
    };

    this.handleSave = this.handleSave.bind(this);
  }
  componentDidMount() {
    fetch(`https://reqres.in/api/users`)
      .then(res => res.json())
      .then(j => this.setState({ teams: j.data }));
  }
  handleChange(team: number, so: IChoice) {
    if (team === 1) {
      this.setState({ selectedTeam1: so });
    } else if (team === 2) {
      this.setState({ selectedTeam2: so });
    }
  }
  handleSave() {
    console.log({
      teams: [this.state.selectedTeam1, this.state.selectedTeam2]
    });
  }
  render() {
    let SelectCard = <div>Loading</div>;

    if (this.state.teams.length > 0) {
      let options: IChoice[] = this.state.teams.map(t => ({
        value: t.id,
        label: t.first_name,
        id: t.id
      }));

      SelectCard = (
        <React.Fragment>
          <h2>Создание соревновательной пары</h2>
          Команда 1
          <Select
            value={this.state.selectedTeam1 && this.state.selectedTeam1.value} //{this.state.selectedTeam1 && this.state.selectedTeam1.label}
            options={options}
            width="100%"
            onChange={so => this.handleChange(1, so)}
          />
          Команда 2
          <Select
            value={this.state.selectedTeam2 && this.state.selectedTeam2.value}
            options={options}
            width="100%"
            onChange={so => this.handleChange(2, so)}
          />
          <Button
            disabled={!this.state.selectedTeam1 || !this.state.selectedTeam2}
            onClick={this.handleSave}
          >
            Save
          </Button>
        </React.Fragment>
      );
    }

    return <SelectHolders>{SelectCard}</SelectHolders>;
  }
}

export default Session;
