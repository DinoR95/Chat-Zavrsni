import { MessageObject } from "../../models/messageobject";

export default function ChatBox() {


  let messageOne = new MessageObject("Dino", "poruka jeadand");
  let messageTwo = new MessageObject(
    "Dino123",
    "poruka asrtmhkajsertnhlaertijhkn"
  );
  let messageTree = new MessageObject("Dino123dsadsad", "poruka 2");

  let messageList = [messageOne, messageTwo, messageTree];

  return (
    <div>
      {messageList.map(function (message, index) {
        return (
          <div key={index} class="message">
            {message.sender} <br />
            {message.message}
          </div>
        );
      })}
    </div>
  );
}
