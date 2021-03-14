import { css } from 'styled-components'

export const tables = css`
  th {
    font-size: 0.875rem;
    border-bottom: 2px solid var(--color-text-dark);
    opacity: 0.3;
  }

  th,
  td {
    padding: 10px;
    text-align: left;
  }

  td {
    border-bottom: 1px solid var(--color-text-dark);
  }
`
