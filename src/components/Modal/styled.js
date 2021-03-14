import styled from 'styled-components'

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease-in-out;

  ${({ isOpen }) => {
    if (isOpen) {
      return 'visibility: visible; opacity: 1;'
    } else {
      return 'visibility: hidden; opacity: 0;'
    }
  }}
`

export const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  padding: 30px;
  border-radius: var(--radius);
  color: var(--color-back);
  background-color: var(--color-text);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.5);
`

export const ModalClose = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 60px;
  height: 60px;
  top: -20px;
  right: -20px;
  border-radius: 50%;
  border: 3px solid var(--color-text);
  background-color: var(--color-back);
  transition: all 0.15s ease-in-out;
  cursor: pointer;

  &:before {
    content: '✖';
    font-size: 1.45rem;
    line-height: 1%;
    text-indent: 1px;
    color: var(--color-text);
  }

  &:hover {
    background-color: var(--color-alert);

    &:before {
      color: var(--color-back);
    }
  }
`

export const ModalContent = styled.div`
  svg {
    & > path {
      fill: var(--color-back);
    }
  }
`

// ----------------------------------------

export const OrderWrapper = styled.div`
  display: flex;
`

export const OrderImage = styled.img`
  display: block;
  max-width: 100%;
  align-self: center;
`

export const OrderContent = styled.div`
  width: 70%;
  padding-left: 30px;

  & > span {
    position: absolute;
    top: 0;
    border-radius: 0 0 6px 6px;
  }

  hr {
    height: 1px;
    opacity: 0.1;
    margin: 15px 0;
    border: 0;
    background-color: var(--color-back);
  }

  h3,
  p {
    margin: 0;

    span {
      display: block;
      opacity: 0.5;
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 100%;
    }
  }

  p {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`
