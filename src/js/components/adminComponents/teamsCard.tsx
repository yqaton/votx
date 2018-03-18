import React, { Component, FormEvent } from "react";
import qs from "qs";
import Uploader from "./uploader";
import AdminCard from "../styled/adminCard";
import { ResolveOptions } from "dns";

interface IState {
  imageLoaded: boolean;
  nameString: string;
  imageUrl: string;
}

const Teams = class extends Component<{}, IState> {
  constructor(props) {
    super(props);

    this.state = {
      imageLoaded: false,
      nameString: "",
      imageUrl: ""
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e: FormEvent<HTMLInputElement>): void {
    this.setState({ nameString: (e.target as HTMLInputElement).value });
  }

  submitHandler(): void {
    fetch("/api/team/", {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: qs.stringify({
        team_name: this.state.nameString,
        image_url: this.state.imageUrl
      })
    })
      .then(res => {
        this.setState({
          imageLoaded: false,
          nameString: "",
          imageUrl: ""
        });
      })
      .catch(rej => console.error(rej));
  }

  render() {
    return (
      <AdminCard>
        <h4>Создание комманды</h4>
        <input
          type="text"
          placeholder="название"
          value={this.state.nameString}
          onChange={e => this.changeHandler(e)}
        />

        <Uploader
          value="value"
          name="file"
          width="100%"
          onChange={file => {
            if (file) {
              file.done(info => this.setState({ imageLoaded: true }));
            }
          }}
          onUploadComplete={info => this.setState({ imageUrl: info.cdnUrl })}
        />

        <button
          type="button"
          disabled={!this.state.imageLoaded || !this.state.nameString.length}
          onClick={this.submitHandler}
        >
          Сохранить
        </button>
      </AdminCard>
    );
  }
};

export default Teams;
