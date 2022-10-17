import { useState } from "react";

function useInput() {
  const [value, setValue] = useState();

  const hadler = (e) => {
    setValue(e.target.value);
  };

  return [value, hadler];
}

export default useInput;
