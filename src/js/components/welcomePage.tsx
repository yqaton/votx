import React, { Component, DOMElement, FormEvent, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";
import styled from "../theme";
import { colours } from "../utils/colours";

const SessionInputCard = styled.section`
  display: flex;
  height: 50vh;
  justify-content: center;
  color: black;
  place-content: center;
  flex-direction: column;
  align-items: center;

  button {
    margin: 20px;
    background: transparent;
    color: ${colours.pink};
    padding: 15px;
    outline: none;
    border: 5px solid;
    text-transform: uppercase;

    &:disabled {
      border-color: gray;
      color: gray;
    }
  }

  input {
    display: flex;
    place-self: center;
    padding: 20px;
    font-size: x-large;
    text-align: center;
  }
`;

const FullHeightWraper = styled.section`
  display: flex;
  height: calc(100vh - 70px);
  align-items: center;
  justify-content: center;
`;
interface Props {
  sessionId?: string;
}

class WelcomePage extends Component<
  Props,
  { sessionId: string; submited: boolean; canSubmit: boolean }
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      sessionId: "",
      submited: false,
      canSubmit: false
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(
    e: FormEvent<HTMLInputElement> | SyntheticEvent<HTMLButtonElement>
  ) {
    this.setState({ submited: true });
    e.preventDefault();
  }

  changeHandler(e: FormEvent<HTMLInputElement>) {
    this.setState({ sessionId: (e.target as HTMLInputElement).value });

    if (
      (e.target as HTMLInputElement).value.length >= 4 &&
      (e.target as HTMLInputElement).value.toLowerCase() !== "admin"
    ) {
      this.setState({ canSubmit: true });
    } else {
      this.setState({ canSubmit: false });
    }

    e.preventDefault();
  }

  render() {
    return (
      <FullHeightWraper>
        {!this.state.submited ? (
          <SessionInputCard>
            <h2>Введите ваш уникальный номер</h2>
            <input
              onChange={e => this.changeHandler(e)}
              onSubmit={e => this.submitHandler(e)}
              value={this.state.sessionId}
              placeholder="XXXX"
              type="text"
            />
            <button
              type="button"
              onClick={e => this.submitHandler(e)}
              disabled={!this.state.canSubmit}
            >
              Отправить
            </button>
          </SessionInputCard>
        ) : (
          <Redirect to={`/${this.state.sessionId}`} />
        )}
      </FullHeightWraper>
    );
  }
}

export default WelcomePage;
