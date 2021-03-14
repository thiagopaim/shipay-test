import { css } from 'styled-components'

export const form = css`
  input {
    height: 25px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid var(--color-text);
    border-radius: var(--radius);
    color: var(--color-text);
    background-color: var(--color-back);

    &:focus {
      border-color: var(--color-alert);
    }
  }

  select {
    &:focus {
      border-color: var(--color-alert);
    }
  }

  .react-datepicker-wrapper {
    input {
      max-width: 100px;
      text-align: center;
    }
  }
`
