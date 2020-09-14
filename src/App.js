import React from 'react';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="navbar navbar-dark bg-primary">
          <a href="/" className="navbar-brand">studygroup</a>
        </div>
        <div className="container-fluid">
          <div className="profile">
            <div className="row profile-row">
              <div className="col-6">word</div>
              <div className="col-6">word</div>
            </div>

            <div className="row profile-row">
              <div className="col-6">word</div>
              <div className="col-6">word</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
