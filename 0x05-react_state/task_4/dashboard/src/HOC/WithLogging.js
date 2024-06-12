import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  class WithLogging extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
    WithLogging.displayName = `WithLogging(${WrappedComponent.name || 'Component'})`;

  return WithLogging;
}

export default WithLogging;