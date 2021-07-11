/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "components/home";
import LoginPage from "components/login";

function App() {
  // const [tracks, setTracks] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://api.spotify.com/v1/tracks", {
  //       headers: {
  //         Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_ID}`,
  //       },
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
