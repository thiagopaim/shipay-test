import Badge from '../Badge'
import * as S from './styled'

import formarCurrency from '../../assets/utils/formatCurrency'

const OrderContent = ({ data }) => (
  <S.OrderWrapper>
    <S.OrderImage src={data.product_image} />
    <S.OrderContent>
      <Badge status={data.status} />
      <h3>
        {data.product_name}
        <span>{data.product_id}</span>
      </h3>
      <hr />
      <p>
        <span>Descrição</span>
        {data.product_description}
      </p>
      <p>
        <span>Valor</span>
        {formarCurrency(data.total_order)}
      </p>
      <p>
        <span>Carteira</span>
        {data.wallet_payment_id ? data.wallet_payment_id : '---'}
      </p>
    </S.OrderContent>
  </S.OrderWrapper>
)

export default OrderContent
