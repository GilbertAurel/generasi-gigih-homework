/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { COLORS } from "constants/theme";
import Title from "./title";
import Footer from "./footer";
import Background from "./background";
import { spotifyLoginAuth } from "redux/actions";
import { useDispatch } from "react-redux";
import { hashSeparator } from "constants/converter";
import { useHistory } from "react-router-dom";
import { spotifyLogin } from "adapters/spotifyAuth";

const HASH_SUBSTRING_INDEX = 1;

export default function Index() {
  const containerRef = useRef(null);
  const [spotifyToken, setSpotifyAuth] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    gsap.to(containerRef.current, {
      visibility: "visible",
      duration: 0.2,
    });

    if (window.location.hash) {
      setSpotifyAuth(hashSeparator(window.location.hash, HASH_SUBSTRING_INDEX));
    }
  }, []);

  useEffect(() => {
    if (spotifyToken.access_token) {
      dispatch(spotifyLoginAuth(spotifyToken));
      return history.push("/playlist");
    }
  }, [dispatch, history, spotifyToken]);

  const loginHandler = () => spotifyLogin();

  const styles = {
    container: css`
      min-height: 100vh;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(5, 1fr);
      background-color: ${COLORS.BG_DARK};
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      visibility: hidden;
    `,
  };

  return (
    <div ref={containerRef} css={styles.container}>
      <Title loginHandler={loginHandler} />
      <Footer />
      <Background />
    </div>
  );
}
