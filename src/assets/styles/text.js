import { css } from 'styled-components'

export const text = css`
  body {
    font-family: sans-serif;
    line-height: 160%;
    color: var(--color-text);
  }

  h1 {
    margin: 0 0 15px;
    font-family: sans-serif;
    font-size: 2.45rem;
    line-height: 100%;
    color: var(--color-text);
  }

  p {
    margin: 0 0 20px;
    font-size: 1rem;
    line-height: 160%;
  }

  ul {
    padding: 0 0 0 20px;
    list-style: disc;
  }

  a {
    text-decoration: none;
    color: var(--color-prim);

    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    font-weight: 700;
  }

  .capitalize {
    text-transform: capitalize;
  }

  .right {
    text-align: right;
  }

  .center {
    text-align: center;
  }
`
