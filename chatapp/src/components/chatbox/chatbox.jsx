import { Component } from "react";

class ChatBox extends Component {
  state = {
    messages: [],
  };

  constructor(props) {
    super(props);
  }

  updateMessages = (newMessage) => {
    this.setState({
      messages: newMessage,
    });
  };

  render() {
    return (
      <div className="messageBox">
        {this.state.messages.map(function (message, index) {
          return (
            <div
              key={index}
              className="message"
              style={
                message.text.user.id == localStorage.getItem("userId")
                  ? { flexDirection: "row-reverse" }
                  : { flexDirection: "row" }
              }
            >
              <div className="display-box">
                <p
                  style={
                    message.text.user.id == localStorage.getItem("userId")
                      ? { alignItems: "flex-end" }
                      : { alignItems: "flex-start" }
                  }
                >
                  {message.text.user.name}
                </p>
                <div
                  style={
                    message.text.user.id == localStorage.getItem("userId")
                      ? {
                          backgroundColor: message.text.user.color,
                          color: "white",
                          borderRadius: "12px",
                          padding: "7px",
                          alignItems: "flex-end",
                        }
                      : {
                          backgroundColor: message.text.user.color,
                          color: "white",
                          borderRadius: "12px",
                          padding: "7px",
                          alignItems: "flex-start",
                        }
                  }
                >
                  {message.text.message}
                </div>{" "}
                <br />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default ChatBox;
