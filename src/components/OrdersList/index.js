import { useCallback } from 'react'
import { OrdersListContext } from '../../context/OrdersListContext'

import * as S from './styled'

import Loading from '../Loading'
import Badge from '../Badge'

import formatDate from '../../assets/utils/formatDate'
import formatCurrency from '../../assets/utils/formatCurrency'
import formatWallet from '../../assets/utils/formatWallet'

import { useContext } from 'react'

const OrdersList = () => {
  const orders = useContext(OrdersListContext)

  return (
    <S.ProductTable>
      <thead>
        <tr>
          <th>Atualizado em</th>
          <th className="right">Valor total</th>
          <th>Carteira</th>
          <th className="right">Status</th>
        </tr>
      </thead>
      <tbody>
        {orders?.isLoading && (
          <tr>
            <td colSpan={4} className="center">
              <Loading />
            </td>
          </tr>
        )}

        {orders.ordersList?.length >= 1 &&
          orders.ordersList?.map((item) => {
            return (
              <S.ProctTableRow
                key={item.id}
                onClick={() => {
                  orders.setIsModalOpen(true)
                  orders.handleGetOrderDetails(item.id)
                }}
              >
                <td>{formatDate(item.update_datetime)}</td>
                <td className="right">{formatCurrency(item.total_order)}</td>
                <td className="capitalize">
                  {item.wallet_payment_name
                    ? formatWallet(item.wallet_payment_name)
                    : '---'}
                </td>
                <td className="right">
                  <Badge status={item.status} />
                </td>
              </S.ProctTableRow>
            )
          })}

        {orders?.isLoading === false && orders?.ordersList?.length === 0 && (
          <tr>
            <td colSpan={4} className="center">
              Nenhum item para apresentar
            </td>
          </tr>
        )}
      </tbody>
    </S.ProductTable>
  )
}

export default OrdersList
