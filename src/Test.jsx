import React from "react";
import Button from "./elements/Button";

const Test = () => {
  const handleFunction = () => {
    console.log("hello");
  };
  return (
    <div>
      <Button
        bgColor="red"
        width="100px"
        height="100px"
        onClick={handleFunction}
        text={"asdfsadf"}
        inline="border: 10px solid yellow; border-radius: 50px"
      >
        dfds
      </Button>
    </div>
  );
};

export default Test;
