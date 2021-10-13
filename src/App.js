import React from "react";
import "./App.css";
import MediaPage from "./components/profile/Timer/Timer.js";
export default class App extends React.Component {
  state = {
    timeStoper: true,
  };

  updatePerson = () => {
    this.setState({
      person: {
        name: "Martha",
        age: 25,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className='main'>
        <p>App Component</p>
        {this.state.timeStoper && <div className="appComponent">
        <div className='TimerComponent'>
       {this.state.timeStoper && <MediaPage />}
        </div>
        <span><button onClick={() => this.setState({ timeStoper: false })}>Stop and Remove Timer</button></span>
        </div>}
        {!this.state.timeStoper && <p className='After-Stop'>Successfully removed!</p>}
        </div>
      </React.Fragment>
    );
  }
}
