/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageLayout({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      visibility: "visible",
      duration: 0.2,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      css={css`
        padding: 0 20%;
        grid-row: 1/3;
        grid-column: 1/2;
        justify-self: stretch;
        align-self: stretch;

        display: flex;
        flex-direction: row;
        position: relative;
        overflow: hidden;
        visibility: hidden;
      `}
    >
      {children}
    </div>
  );
}
