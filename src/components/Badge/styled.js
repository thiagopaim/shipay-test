import styled from 'styled-components'

export const BadgeWrapper = styled.span`
  display: inline-block;
  padding: 5px 13px;
  border-radius: var(--radius);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.045em;
  line-height: 100%;
  text-transform: uppercase;

  background-color: ${({ status }) => {
    if (status === 'cancelled') {
      return 'var(--color-alert)'
    }
    if (status === 'expired') {
      return 'var(--color-text-dark)'
    }
    if (status === 'approved') {
      return 'var(--color-prim)'
    }
    if (status === 'refunded') {
      return 'var(--color-text)'
    }
  }};

  color: ${({ status }) => {
    if (status === 'cancelled') {
      return '#333'
    }
    if (status === 'refunded') {
      return 'var(--color-error)'
    }
  }};
`
