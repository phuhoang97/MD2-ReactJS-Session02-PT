import React, { Component } from "react";
import "../App.css";

class DemoJSX extends Component {
  render() {
    // Để sử dụng JSX sẽ sử dụng thông qua cặp {}
    // Ví dụ
    const hello = "Xin chào mọi người";

    const inforUser = {
      question: "Mạnh có đẹp trai không?",
      answer: "Chắc không phải đâu",
    };

    function f(user) {
      return user.question + user.answer;
    }

    const hideQuestion = <h1>{f(inforUser)}</h1>;

    return (
      <>
        <h3>{hello}</h3>
        <div>{hideQuestion}</div>
        <div>{f(inforUser)}</div>
        <div className='hello' style={{ color: "pink" }}>
          Click me !!!
        </div>
      </>
    );
  }
}

export default DemoJSX;
