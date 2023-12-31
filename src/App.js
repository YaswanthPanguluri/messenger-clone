import { useEffect, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/base/FormControl";
import { Input } from "@mui/material";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{}]);
  //   { username: "yaswanth", text: "hai" },
  //   { username: "kakatiya", text: "hello" },
  //   { username: "panguluri", text: "hey!" },

  // ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("please enter your name"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({id:doc.id,message:doc.data()})));
      });
  }, []);

  //console.log(input);
  //console.log(messages);
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="App">
    <img src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/03426705-e054-4210-4cf1-0fb193c0fc00/preview"></img>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <Input
            placeholder="Enter a message.."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            type="submit"
            onClick={sendMessage}
          >
            Send message
          </Button>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={data} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
