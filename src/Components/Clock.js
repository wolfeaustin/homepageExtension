import React from "react";
import "../Home.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
      currentTime: "",
      amPM: "",
      date: ""
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString(),
      currentTime: this.state.time
        .split(",")[1]
        .slice(1)
        .split(" ")[0],
      amPM: this.state.time
        .split(",")[1]
        .slice(1)
        .split(" ")[1],
      date: this.state.time.split(",")[0]
    });
  }

  render() {
    console.log("clock", this.state);
    return (
      <div>
        <h1>{this.state.currentTime}</h1>
        <h3>{this.state.amPM}</h3>
        <h2>{this.state.date}</h2>
      </div>
    );
  }
}

export default Clock;
