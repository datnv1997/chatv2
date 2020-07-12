
import React, { useEffect, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import { Common } from "./utils/Common";
import FrameChat from "./components/FrameChat";
import SideBar from "./components/SideBar";

const urlServer = "http://localhost:3030";
const socket = io(urlServer);
var P2P = require('socket.io-p2p');
// var p2p = new P2P(socket);
var opts = { autoUpgrade: true, numClients: 2 }
var p2p = new P2P(socket, opts, function () {
  // privateButton.disabled = false
  p2p.upgrade();
  console.log(p2p);
  p2p.emit('peer-msg', 'Hello there. I am ' + p2p.peerId)
})
console.log(socket);
class App extends React.Component {
  state = {
    totalClient: 0,
    arrayMsg: [],
    dataCurrentConnection: {},
    tempData: {},
  };
  sendMessage = (event, valueText) => {
    event.preventDefault();
    socket.emit("allClient", {
      msg: valueText,
      dataCurrentConnection: this.state.dataCurrentConnection,
    });

    Common.scrollToBottom(document.getElementById("content"))

  };
  componentDidMount() {
    p2p.on('peer-msg', function (data) {
      console.log('From a peer %s', data);
    });
    socket.on("dataSocket", (data) => {
      console.log(data);
      this.setState({
        totalClient: data.totalClient,
        dataCurrentConnection: data.dataCurrentConnection,
      });
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
      console.log(data);
      this.setState({
        arrayMsg: [...this.state.arrayMsg, data]
      }, () => console.log(this.state.arrayMsg));
    });
  }
  render() {
    let totalClientsOnline = `New user joined, ${this.state.totalClient} user online`;

    return (
      // <main>
      //   <div className="layout">
      <Fragment>
        {/* <SideBar></SideBar> */}
        {/* Start of Add Friends */}
        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="requests">
              <div className="title">
                <h1>Add your friends</h1>
                <button type="button" className="btn" data-dismiss="modal" aria-label="Close"><i className="material-icons">close</i></button>
              </div>
              <div className="content">
                <form>
                  <div className="form-group">
                    <label htmlFor="user">Username:</label>
                    <input type="text" className="form-control" id="user" placeholder="Add recipient..." required />
                    <div className="user" id="contact">
                      <img className="avatar-sm" src="dist/img/avatars/avatar-female-5.jpg" alt="avatar" />
                      <h5>Keith Morris</h5>
                      <button className="btn"><i className="material-icons">close</i></button>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="welcome">Message:</label>
                    <textarea className="text-control" id="welcome" placeholder="Send your welcome message..." defaultValue={"Hi Keith, I'd like to add you as a contact."} />
                  </div>
                  <button type="submit" className="btn button w-100">Send Friend Request</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End of Add Friends */}
        {/* Start of Create Chat */}
        <div className="modal fade" id="startnewchat" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="requests">
              <div className="title">
                <h1>Start new chat</h1>
                <button type="button" className="btn" data-dismiss="modal" aria-label="Close"><i className="material-icons">close</i></button>
              </div>
              <div className="content">
                <form>
                  <div className="form-group">
                    <label htmlFor="participant">Recipient:</label>
                    <input type="text" className="form-control" id="participant" placeholder="Add recipient..." required />
                    <div className="user" id="recipient">
                      <img className="avatar-sm" src="dist/img/avatars/avatar-female-5.jpg" alt="avatar" />
                      <h5>Keith Morris</h5>
                      <button className="btn"><i className="material-icons">close</i></button>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="topic">Topic:</label>
                    <input type="text" className="form-control" id="topic" placeholder="What's the topic?" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea className="text-control" id="message" placeholder="Send your welcome message..." defaultValue={"Hmm, are you friendly?"} />
                  </div>
                  <button type="submit" className="btn button w-100">Start New Chat</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End of Create Chat */}
        <FrameChat
          totalClientsOnline={totalClientsOnline}
          arrayMsg={this.state.arrayMsg}>

        </FrameChat>
      </Fragment>
      //   </div> {/* Layout */}
      // </main>

    );
  }
}

export default App;
