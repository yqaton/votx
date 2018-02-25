import React from 'react';
import Uploader from './uploader';

import AdminCard from './styledAdminCard';

const NewTeam = class extends React.Component {
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
      body: JSON.stringify({
        team_name: this.state.nameString,
        image_url: this.state.imageUrl
      })
    })
      .then(res => console.log(res))
      .catch(rej => console.error(rej));

    this.setState({
      imageLoaded: false,
      nameString: '',
      imageUrl: ''
    });
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

export default NewTeam;
