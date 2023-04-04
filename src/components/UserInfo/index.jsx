import React, { Component } from 'react'

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const {avatar_url, name, bio, location} = this.props.userInfo
    return (
      <div>
        <div>
          {avatar_url && <img src={avatar_url} alt={name} width='150' />}
          {name && <h1>{name}</h1>}
        </div>
        {bio && <div>BIO: {bio}</div>}
        {location && <div>LOCATION: {location}</div>}
      </div>
    )
  }
}
