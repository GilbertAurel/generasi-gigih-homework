/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'utils/theme';
import { Link } from 'react-router-dom';
import { PAGES } from 'utils/pages';

export default function Menu({ logoutHandler }) {
  const styles = {
    container: css`
      display: flex;
      flex-direction: row;
      gap: 100px;

      @media (max-width: 1600px) {
        visibility: hidden;
      }
    `,
    button: css`
      margin: 0;
      padding: 0;
      font-family: 'Noto Sans', sans-serif;
      font-size: ${FONTS.BODY};
      cursor: pointer;
      transition: color 0.6s;
      color: ${COLORS.BTN_NOT_ACTIVE_DARK};
      text-decoration: none;

      :hover {
        color: ${COLORS.BTN_ACTIVE_DARK};
      }
    `,
  };

  return (
    <div css={styles.container}>
      {PAGES.map(
        ({ name, path }, index) =>
          name && (
            <Link key={index} css={styles.button} to={`${path}`}>
              {name}
            </Link>
          )
      )}
      <p onClick={logoutHandler} css={styles.button}>
        Sign out
      </p>
    </div>
  );
}
