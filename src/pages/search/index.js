/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";
import axios from "axios";

import PageLayout from "components/pageLayout";
import Skeleton from "components/skeleton";
import InputForm from "pages/handson/inputForm";
import HandsonGIF from "pages/handson/handsonGIF";

export default function Index({ hashToken }) {
  const [inputValue, setInputValue] = useState("");
  const [showSong, setShowSong] = useState([]);
  const [loaded, setLoaded] = useState(true);

  const searchButtonHandler = async (event) => {
    if (event.key === "Enter") {
      const authKey = encodeURIComponent(
        `${process.env.REACT_APP_SPOTIFY_ID}:${process.env.REACT_APP_SPOTIFY_SECRET}`
      );
      setLoaded(false);
      return await axios
        .get(`https://api.spotify.com/v1/search`, {
          headers: {
            Authorization: `Bearer ${hashToken}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          params: {
            q: inputValue,
            type: "track",
            limit: 5,
          },
        })
        .then((response) => {
          setShowSong(response.data.tracks.items);
          setLoaded(true);
        })
        .catch((error) => console.log(error));
    }
  };

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const RenderSongList = () => {
    return showSong.map((song, index) => (
      <HandsonGIF key={index} url={song.album.images[0].url} />
    ));
  };

  return (
    <PageLayout>
      <div
        css={css`
          width: 100%;
          margin: 8rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
          align-items: center;
          gap: 2rem;
        `}
      >
        <InputForm
          inputChangeHandler={inputChangeHandler}
          inputValue={inputValue}
          searchButtonHandler={searchButtonHandler}
        />
        {loaded ? RenderSongList() : <Skeleton type={"gif"} />}
      </div>
    </PageLayout>
  );
}
