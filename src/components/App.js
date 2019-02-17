import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';


class App extends Component {
  render() {
    toast('Item Added');
    return (
      <div>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
