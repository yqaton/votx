import React from "react";
import InputHolder from "../styled/inputHolder";
import Button from "../styled/buttton";

export interface IRound {
  id: number;
  name: string;
  color: string;
}

export interface IState {
  rounds: IRound[];
  roundName: string;
}

class Rounds extends React.Component<{}, IState> {
  constructor(props) {
    super(props);

    this.state = {
      rounds: [],
      roundName: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch(`https://reqres.in/api/unknown`)
      .then(res => res.json())
      .then(json => this.setState({ rounds: json.data }));
  }

  handleClick() {
    console.log(this.state.roundName);
  }

  handleChange(e) {
    this.setState({ roundName: (e.target as HTMLInputElement).value });
  }
  render() {
    let rounds = <div>Пока ничего нет</div>;

    if (this.state.rounds.length > 0) {
      rounds = (
        <React.Fragment>
          {this.state.rounds.map(r => (
            <div key={r.id} style={{ backgroundColor: `${r.color}` }}>
              {r.name}
            </div>
          ))}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <h2>Текущий раунд</h2>
        {rounds}
        <h2>Новый раунд</h2>
        <InputHolder>
          <input type="text" onChange={this.handleChange} />
        </InputHolder>
        <Button onClick={this.handleClick}>Save</Button>
      </React.Fragment>
    );
  }
}

export default Rounds;
