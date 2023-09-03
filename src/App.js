import { useEffect, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/base/FormControl";
import { InputLabel, Input } from "@mui/material";
import Message from "./Message";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["a", "b", "c"]);
  const [username, setUsername] = useState('');


  useEffect(()=>{
    setUsername(prompt('please enter your name'))
  },[])

  //console.log(input);
  //console.log(messages);
  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  }
  return (
    <div className="App">
    <h2>Welcome {username}</h2>
      <form>
        <FormControl>
        <InputLabel>Enter a message..</InputLabel>
          <Input  value={input} onChange={(event) => setInput(event.target.value)}/>
          <Button disabled={!input} variant="contained" type="submit" onClick={sendMessage}>
            Send message
          </Button>
        </FormControl>
      </form>
      {/* message themsels */}
      {messages.map((message) => (
        <Message text = {message}/>
      ))}
    </div>
  );
}

export default App;
