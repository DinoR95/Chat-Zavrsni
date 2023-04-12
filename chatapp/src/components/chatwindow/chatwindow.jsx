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
        this.chatBoxElement = React.createRef();

        
      }

      updateMessages = () => {
        this.chatBoxElement.current.updateMessages(this.state.messages);
      };

      componentDidMount() {
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
          const membeer = {...this.state.member};

          const messages = this.state.messages;
          messages.push({membeer, text: data});
          this.setState({messages});
          this.updateMessages();
        });
    }

      render() {
        return (
            <div>
              <ChatBox ref={this.chatBoxElement}/>
              <ChatInput chatWindowCallback={this.onSendMessage}/>
            </div>

        ); 
      }
    
      onSendMessage = (message) => {
        let sendMessage = {
          message: message,
          year: 2023
        }

        this.drone.publish({
          room: "test_room",
          message: sendMessage
        });

        console.log("dasdasd")
      }
}

export default ChatWindow;

