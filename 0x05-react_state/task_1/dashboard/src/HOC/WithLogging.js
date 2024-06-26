import React, { Component } from 'react';
import AppContext from '../../../../task_2/dashboard/src/App/AppContext';

const WithLogging = (WrappedComponent) => {
  // const user = useContext(AppContext);
  class WithLogging extends Component {
    // static user = useContext(AppContext);
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted`);
      // console.log(user);
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