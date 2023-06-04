import { Component } from "react";

class ChatInput extends Component {
  state = { message: "" };

  sendMessage = (event) => {
    this.props.chatWindowCallback(this.state.message);
    event.preventDefault();
  };
  handleValueChange = (e) => {
    this.setState({ message: e.target.value });
  };
  render() {
    return (
      <div style={{ height: "100%" }}>
        <form style={{ height: "100%" }}>
          <div className="input-group" style={{ height: "100%" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Write a message"
              onChange={this.handleValueChange}
            />

            <button
              value={this.state.message}
              onClick={this.sendMessage}
              className="btn btn-primary"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ChatInput;
