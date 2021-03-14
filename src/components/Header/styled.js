import Link from 'next/link'
import styled from 'styled-components'

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  max-width: var(--max-width);
  padding: 0 0 20px;
  margin: 0 auto;
`

export const Logo = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  margin-left: auto;
  list-style: none;
`

export const MenuItem = styled.li`
  margin-left: 15px;
`

export const MenuLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 100%;
  color: var(--color-prim);
`
