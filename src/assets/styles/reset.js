import { css } from 'styled-components'

export const reset = css`
  html,
  body {
    padding: 0;
    background-color: var(--color-back);
  }

  table {
    border-collapse: collapse;
  }

  *,
  input,
  select,
  textarea,
  option,
  button {
    outline: none !important;
  }

  * {
    box-sizing: border-box;
  }
`
