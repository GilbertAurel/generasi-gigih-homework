/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";

import Menu from "./menu";
import Logo from "./logo";

export default function Index(props) {
  const navbarRef = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .to(navbarRef.current, {
        visibility: "visible",
        duration: 0.2,
        delay: 0.5,
      })
      .from(navbarRef.current, {
        y: -100,
        opacity: 0,
        duration: 1.6,
        ease: Power3.easeInOut,
      });
  }, []);

  return (
    <div
      ref={navbarRef}
      css={css`
        min-width: 100%;
        padding: 0 20%;
        position: absolute;
        top: 4rem;
        left: 0;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
        visibility: hidden;

        @media (max-width: 1600px) {
          visibility: hidden;
        }
      `}
    >
      <Logo />
      <Menu {...props} />
    </div>
  );
}
