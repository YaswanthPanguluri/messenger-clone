import React from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import "./Message.css";

function Message({ message, username }) {
  const isUser = username === message.username;
  return (
    <div className={`message ${isUser && "message__user"}`}>
      <Card >
        <CardContent>
          <Typography variant="h5" component="h2">
            {message.username} : {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
