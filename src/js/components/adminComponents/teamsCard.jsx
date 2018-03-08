import React, { Component } from 'react';
import qs from 'qs';
import Uploader from './uploader';
import AdminCard from '../styled/adminCard';

const Teams = class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLoaded: false,
      nameString: '',
      imageUrl: ''
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({ nameString: e.target.value });
  }

  submitHandler() {
    fetch('/api/team/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: qs.stringify({
        team_name: this.state.nameString,
        image_url: this.state.imageUrl
      })
    })
      .then((res) => {
        if (res.status == 'ok') {
          this.setState({
            imageLoaded: false,
            nameString: '',
            imageUrl: ''
          });
        }
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
          id="file"
          name="file"
          width="100%"
          onChange={(file) => {
            if (file) {
              file.done(info => this.setState({ imageLoaded: true }));
            }
          }}
          onUploadComplete={info => this.setState({ imageUrl: info.cdnUrl })}
        />
        {console.log(this.state)}
        <button
          type="button"
          disabled={
            !this.state.imageLoaded || !this.state.nameString.length > 0
          }
          onClick={this.submitHandler}
        >
          Сохранить
        </button>
      </AdminCard>
    );
  }
};

export default Teams;
