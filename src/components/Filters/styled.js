import styled from 'styled-components'

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: var(--max-width);
  padding: 15px 0 20px;
  margin: 0 auto;
  border-radius: var(--radius);
  background-color: var(--color-text-dark);
`

export const FilterGroup = styled.div`
  margin: 0 10px;

  label {
    display: block;
    margin: 0 0 5px 5px;
    font-size: 0.75rem;
    line-height: 100%;
  }
`

export const FilterSelect = styled.select`
  height: 25px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid var(--color-text);
  border-radius: var(--radius);
  color: var(--color-text);
  background-color: var(--color-back);
`

export const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:before {
    content: 'até';
    position: absolute;
    width: 25px;
    height: 25px;
    left: calc(50% - 10px);
    bottom: 0px;
    border-radius: var(--radius);
    font-size: 0.65rem;
    line-height: 23px;
    text-align: center;
    color: var(--color-alert);
  }

  input {
    width: 100px;
    margin: 0;
    text-align: center;
  }
`

export const ValueStart = styled.input`
  border-right: transparent;
  border-radius: var(--radius) 0 0 var(--radius);
`

export const ValueEnd = styled.input`
  margin: 0;
  border-left: transparent;
  border-radius: 0 var(--radius) var(--radius) 0;
`
