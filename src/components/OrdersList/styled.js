import styled from 'styled-components'

export const ProductTable = styled.table`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
`

export const ProctTableRow = styled.tr`
  cursor: pointer;

  &:hover {
    td {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`
