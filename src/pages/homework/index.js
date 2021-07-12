/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Index() {
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
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        visibility: hidden;
      `}
    >
      REQUIREMENTS: PUT ALL IN APP.JS
    </div>
  );
}
