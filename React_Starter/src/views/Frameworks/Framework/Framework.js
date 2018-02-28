import React, { Component } from 'react';
import FakeApi from '../../../fakeApi';

class Framework extends Component {

  constructor(props) {
    super(props);
  }
  /*
  User = ({match}) => {
    return <h1>{match.params.name}</h1>
  }
  */

  render() {

    const framework = FakeApi.get(this.props.match.params.name);

    return (
      <div className="animated fadeIn">
        {framework.name}
        <br />
        {framework.templateType}
        <br />
        {framework.Version}
      </div>
    )
  }
}

export default Framework;
