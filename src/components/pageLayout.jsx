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

  const styles = {
    container: css`
      min-height: 100vh;
      padding: 0 20%;
      display: flex;
      flex-direction: row;
      position: relative;
      overflow: hidden;
      visibility: hidden;
    `,
  };

  return (
    <div ref={containerRef} css={styles.container}>
      {children}
    </div>
  );
}