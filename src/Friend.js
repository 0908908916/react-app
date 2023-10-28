import React from "react";

// 做好一個屬性 套用在 App.js
// props 他是一個屬性 他可以從 App.js 去獲得的這個 Friend 你所設定的這些屬性

const Friend = (props) => {
  // console.log(props); // 這個屬性 可以看到 你在 App.js 填入的三個物件 從網頁點 F12 到裡面看
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <p>{props.desc}</p>
    </div>
  );
};

export default Friend;
