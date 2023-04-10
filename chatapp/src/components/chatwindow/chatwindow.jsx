import ChatBox from "../chatbox/chatbox";
import React, { Component } from 'react';
import ChatInput from "../chatinput/chatinput";
import { MessageObject } from "../../models/messageobject";
import { useState } from "react";
// const Scaledrone = require("scaledrone-react-native");

class ChatWindow extends Component {

    state = {
        messages: [],
        member: {
          username: "Test user",
        }
      }


    constructor() {
        super();
        this.drone = new window.Scaledrone("7aM5zhCeSdI3TKfh", {
          data: this.state.member
        });
        this.drone.on('open', error => {
          if (error) {
            return console.error(error);
          }
          const member = {...this.state.member};
          member.id = this.drone.clientId;
          this.setState({member});
        });
        const room = this.drone.subscribe("test_room");
        room.on('data', (data, member) => {
          const messages = this.state.messages;
          messages.push({member, text: data});
          this.setState({messages});
          console.log(messages)
        });
      }

      render() {
        return (
            <div></div>
        //   <div className="App">
        //     <div className="App-header">
        //       <h1>My Chat App</h1>
        //     </div>
        //     <Messages
        //       messages={this.state.messages}
        //       currentMember={this.state.member}
        //     />
        //     <Input
        //       onSendMessage={this.onSendMessage}
        //     />
        //   </div>
        );
      }
    
      onSendMessage = (message) => {
        this.drone.publish({
          room: "observable-room",
          message
        });
      }
}

export default ChatWindow;

