import * as S from './styled'

const Header = () => (
  <S.Navbar>
    <S.Logo>lojinha</S.Logo>
    <S.Menu>
      <S.MenuItem>
        <S.MenuLink href="/">
          <a>Home</a>
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink href="/orders">
          <a>Pedidos</a>
        </S.MenuLink>
      </S.MenuItem>
    </S.Menu>
  </S.Navbar>
)

export default Header
