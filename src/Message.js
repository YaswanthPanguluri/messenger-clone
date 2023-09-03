import React,{forwardRef} from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import "./Message.css";


const Message = forwardRef(({ message, username },ref)=>  {
  const isUser = username === message.username;
  return (
    <div ref = {ref}className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__usercard":"message__guestcard"} >
        <CardContent>
          <Typography variant="h5" component="h2">
            {message.username} : {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
)
export default Message;
