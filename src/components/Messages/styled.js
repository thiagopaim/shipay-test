import styled from 'styled-components'

export const MessageWrapper = styled.div`
  width: 100%auto;
  max-width: var(--max-width);
  padding: 15px;
  margin: 0 auto;
  border-radius: var(--radius);
  border: 2px solid transparent;
  line-height: 100%;
  text-align: center;
  border-color: ${(props) =>
    props.error ? 'var(--color-error)' : 'var(--color-prim)'};
  color: ${(props) =>
    props.error ? 'var(--color-error)' : 'var(--color-prim)'};
`
