import React, { useState } from "react"; // 套入 state
import Create from "./Create"; // 導入 Creact
import Info from "./Info"; //  導入 Info

const App = () => {
  let [messages, setMessages] = useState([]);
  return (
    <div>
      <Create messages={messages} setMessages={setMessages} />
      <Info messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default App;
