import React, {Component} from 'react';

export default class Details extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = Object.assign({}, props);
  }
  componentWillReceiveProps(props) {
    this.setState(props);
  }
  render() {
    const {location: {state: {url = 'unknown'}}} = this.state;
    return (
      <div>This is a detail page for <a href={url}>{url}</a></div>
    );
  }
}