import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 15px 0;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  margin: 0 10px;
  border: 2px solid var(--color-text);
  border-radius: var(--radius);
  font-size: 0.875rem;
  font-weight: 700;
  text-align: center;
  color: var(--color-text);
  background-color: var(--color-text-dark);
  cursor: pointer;

  &:hover {
    color: var(--color-back);
    background-color: var(--color-text);
  }

  i {
    transform: scale(0.76);
  }
`
