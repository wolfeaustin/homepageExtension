import React from "react";
import "../Home.css";
import Clock from "./Clock";
import MostVisitedContainer from "./MostVisitedContainer";
import photo from "../hand_in_water.jpg";

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
    console.log({ photo });
    return (
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url(${photo})`
        }}
      >
        <div className="centerElements">
          <div>
            <Clock />
            <div className="greeting">{this.state.greeting}</div>

            <MostVisitedContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
