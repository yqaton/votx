import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const SessionInputCard = styled.section`
  display: flex;
  height: 50vh;
  justify-content: center;
  color: white;
  place-content: center;
  flex-direction: column;
  align-items: center;

  button {
    margin: 20px;
    background: transparent;
    color: pink;
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

class NoIdInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      session_id: '',
      submited: false,
      canSubmit: false
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    this.setState({ submited: true });
    e.preventDefault();
  }

  changeHandler(e) {
    this.setState({ session_id: e.target.value });

    if (e.target.value.length >= 4 && e.target.value.toLowerCase() != 'admin') {
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
              value={this.state.session_id}
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
          <Redirect to={`/${this.state.session_id}`} />
        )}
      </FullHeightWraper>
    );
  }
}

export default NoIdInput;
