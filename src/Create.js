import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// 將網頁輸入的值 按下 Submit 他會出現在下方 看 F12 一直輸入資料會持續在下方
// 輸入的資料 來看 F12 都會在串列裡面
const Create = ({ messages, setMessages }) => {
  let [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // 添加 uuid 在這邊
    setMessages([...messages, { input, id: uuidv4() }]);
    setInput("");
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  // value 讓他輸入資料後 輸入欄位會變成空的
  return (
    <form>
      <input onChange={inputHandler} value={input} type="text" />
      <button onClick={submitHandler}>Submit</button>
    </form>
  );
};

export default Create;
