import React from 'react';
import './App.css';
import profilepic from './Profile Picture.jpg';

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
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-9">
                    <img src={profilepic} className="profile-img" alt="profile picture" />
                  </div>
                  <div className="col-3">
                    <h5>5/5 stars</h5>
                    <br></br>
                    <h5>Taught 12 classes</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <h3>Interests:</h3>
                <ul>
                  <li>Programming</li>
                  <li>Music (guitar/piano/editing)</li>
                  <li>Philosophy</li>
                </ul>
                <br></br>
                <h3>Classes taken:</h3>
                <ol>
                  <li>COMP 1-4</li>
                  <li>Assembly</li>
                  <li>Computer Architecture</li>
                  <li>Calc 1-3</li>
                </ol>
              </div>
            </div>

            <div className="row profile-row">
              <div className="col-sm-6">
                <h3>Can teach:</h3>
                <ol>
                  <li>Math (up to Calc-3 or Discrete-2)</li>
                  <li>Programming (up to comp-4)</li>
                  <li>Assembly</li>
                </ol>
              </div>
              <div className="col-sm-6">
                <h3>About me</h3>
                <p>I'm your average CS nerd, I can help you out with math and basic coding.</p>
                <p>I would love to learn some music editing or get a guitar lesson from a real pro.</p>
                <p>Peace.</p>
                <br></br>
                <p>Discord: dbauman1010</p>
                <p>Snapchat: db1010</p>
                <br></br>
                <p>Junior at University of Massachusetts - Lowell.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
