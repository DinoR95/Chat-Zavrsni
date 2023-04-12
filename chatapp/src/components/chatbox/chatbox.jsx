import { Component } from "react";
import { MessageObject } from "../../models/messageobject";

class ChatBox extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  state = {
    messages: [],
  };

  updateMessages = (newMessage) => {
    this.setState({
      messages: newMessage,
    });

    console.log(this.state.messages);
  };

  render() {
    return (
      <div>
        {this.state.messages.map(function (message, index) {
          return (
            <div key={index} className="message">
              {message.text.message} <br />
            </div>
          );
        })}
      </div>
    );
  }
}
export default ChatBox;
