import { useState } from "react";

function useInput() {
  const [value, setValue] = useState();

  const handler = (e) => {
    e.target ? setValue(e.target.value) : setValue(e);
  };

  return [value, handler];
}

export default useInput;
