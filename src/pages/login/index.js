/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useState } from "react";

import { SPOTIFY_AUTH_URL } from "constants/urls";

export default function Index() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={inputChangeHandler} />
      <button onClick={() => alert(`search: ${inputValue}`)}>search</button>
      {/* <a href={SPOTIFY_AUTH_URL}>login</a> */}
    </div>
  );
}
