import React from "react";
export default class MediaPage extends React.Component {
  state = {
    interval:0
  };
  time;

  componentDidMount = () => {
    this.time = setInterval(() => {
     this.setState(prevState =>{
        return {
            interval: prevState.interval + 1,
          };
     });
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <React.Fragment>
        <p>Timer component</p>
        <h1>Seconds: {this.state.interval}</h1>
      </React.Fragment>
    );
  }
}
