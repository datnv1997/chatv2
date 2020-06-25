import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";
import Test from "./test";
import { useState } from "react";
const urlServer = "http://localhost:3030";
const socket = io(urlServer);
console.log("object");
class App extends React.Component {
  state = {
    totalClient: 0,
    arrayMsg: [],
  };
  sendMessage = (event, valueText) => {
    event.preventDefault();
    socket.emit("all client", valueText);
  };
  componentDidMount() {
    socket.on("dataSocket", (data) => {
      this.setState({ totalClient: data.totalClient });
    });
    document
      .getElementById("content-chat")
      .addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
          event.preventDefault();
          let valueInput = document.getElementById("content-chat").value;
          this.sendMessage(event, valueInput);
          document.getElementById("content-chat").value = "";
        }
      });
    socket.on("Message", (data) => {
      this.setState({ arrayMsg: [...this.state.arrayMsg, data] });
    });
  }

  render() {
    let totalClientsOnline = `New user joined, ${this.state.totalClient} join room`;
    const NotificationUserJoin = (
      <div className="date">
        <hr />
        <span>{totalClientsOnline}</span>
        <hr />
      </div>
    );
    return (
      <main>
        <Test></Test>
        {/* Layout */}
      </main>
    );
  }
}

export default App;
