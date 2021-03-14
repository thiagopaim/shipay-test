import { useContext } from 'react'
import { OrdersListContext } from '../../context/OrdersListContext'
import * as S from './styled'

const Pagination = () => {
  const orders = useContext(OrdersListContext)

  return (
    <S.ButtonWrapper>
      <S.Button onClick={() => orders.setActualPage(orders.actualPage - 1)}>
        Anterior
      </S.Button>
      <S.Button onClick={() => orders.setActualPage(orders.actualPage + 1)}>
        Próximo
      </S.Button>
    </S.ButtonWrapper>
  )
}

export default Pagination
