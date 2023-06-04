import ChatBox from "../chatbox/chatbox";
import React, { Component } from "react";
import ChatInput from "../chatinput/chatinput";
import { names } from "../../assets/names";

class ChatWindow extends Component {
  state = {
    messages: [],
    member: {
      username: names[Math.floor(Math.random() * names.length)],
      id: crypto.randomUUID(),
      color: this.getRandomColor(),
    },
  };

  constructor() {
    super();
    this.chatBoxElement = React.createRef();
    localStorage.setItem("userId", this.state.member.id);
  }

  updateMessages = () => {
    this.chatBoxElement.current.updateMessages(this.state.messages);
  };

  componentDidMount() {
    this.drone = new window.Scaledrone("7aM5zhCeSdI3TKfh", {
      data: this.state.member,
    });
    this.drone.on("open", (error) => {
      if (error) {
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });
    const room = this.drone.subscribe("test_room");
    room.on("data", (data) => {
      const messages = this.state.messages;
      messages.push({ text: data });
      this.setState({ messages });
      this.updateMessages();
    });
  }

  render() {
    return (
      <div className="chat-window">
        <div className="chat-box">
          <ChatBox ref={this.chatBoxElement} />
        </div>
        <div className="chat-input">
          <ChatInput chatWindowCallback={this.onSendMessage} />
        </div>
      </div>
    );
  }

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  onSendMessage = (message) => {
    var sendMessage = {
      message: message,
      user: {
        name: this.state.member.username,
        id: localStorage.getItem("userId"),
        color: this.state.member.color,
      },
    };

    this.drone.publish({
      room: "test_room",
      message: sendMessage,
    });
  };
}

export default ChatWindow;
