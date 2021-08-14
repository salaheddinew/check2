import React, { Component } from "react";

export default class classique extends Component {
  state = {
    person: {
      FullName: "slah",
      Bio: "junior dev web",
      Profession: "cc",
      ImgSrc: "./images/account.svg",
      Shows: true,
    },
    counter: 0,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <div>
          <p>counter :{this.state.counter} </p>
        </div>
        <h4>My Name :{this.state.person.FullName} </h4>
        <h5> Discribtion :{this.state.person.Bio} </h5>
        <h5>Job :{this.state.person.Profession} </h5>
        {this.state.person.Shows && <img src={this.state.person.ImgSrc} />}
        <button
          onClick={() => {
            this.setState({
              person: {
                ...this.state.person,
                Shows: !this.state.person.Shows,
              },
            });
          }}
        >
          Check
        </button>
      </div>
    );
  }
}
