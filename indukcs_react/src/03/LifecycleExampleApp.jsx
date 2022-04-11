import React, {Component} from 'react';
import LifecycleExample from './LifecycleExample';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasDestroyed: false}
    }
  render() {
    return (
        <div>
          <LifecycleExample />
        </div>
    );
  }
}

export default App;
