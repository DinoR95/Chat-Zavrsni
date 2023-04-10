import { useState } from 'react';


export default function ChatInput() {

  const [value, setValue] = useState("");
  const sendMessage = (event) => {
    console.log(value);
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <div class="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Write a message"
            onChange={(e) => setValue(e.target.value)}
          />

          <button value={value} onClick={sendMessage} className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
