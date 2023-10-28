import React from "react";
import "./styles/style.css";

// JSX class => className

const Message = ({ msg, messages, setMessages }) => {
  const deleteHandler = () => {
    // 如果這個條件是 false 他就不會回傳回來 會直接刪除
    setMessages(messages.filter((m) => m.id !== msg.id));
  };
  return (
    <div className="msg">
      <p>{msg.input}</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Message;
