import React from "react";
import "../Home.css";
import Clock from "./Clock";
import MostVisitedContainer from "./MostVisitedContainer";

const authenticationKey =
  "f1e9e7963b1eaa48dad33fa77d814efd65c5915c4834dce69a64c2f7133f0243";

const potentialGreetings = [
  "Morning Love",
  "Hello, Cowboy",
  "Sup, Champ",
  "What's cookin'?"
];

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      photoURL: "",
      greeting:
        potentialGreetings[
          Math.floor(Math.random() * potentialGreetings.length)
        ]
    };
  }

  componentDidMount() {
    // fetch(
    //   `https://api.unsplash.com/photos/random?client_id=${authenticationKey}`
    // )
    //   .then(r => r.json())
    //   .then(data =>
    //     this.setState({
    //       photoURL: data.urls.raw
    //       //probably need to change this to full at some point
    //     })
    //   );
  }

  render() {
    console.log(this.state);
    return (
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url(${this.state.photoURL})`
        }}
      >
        <div
          style={{
            margin: "0 auto",
            position: "relative",
            top: "50%"
          }}
        >
          <h1>{this.state.greeting}</h1>
          <Clock />
          {console.log(this)}

          <MostVisitedContainer />
        </div>
      </div>
    );
  }
}

export default Home;
