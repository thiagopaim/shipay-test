import { useContext, useState, useRef } from 'react'
import { OrdersListContext } from '../../context/OrdersListContext'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { format } from 'date-fns'

import * as S from './styled'

const Filters = () => {
  const {
    setActualPage,
    setFilterStatus,
    setFilterWallet,
    setFilterDate,
    setFilterAmountStart,
    setFilterAmountEnd,
  } = useContext(OrdersListContext)

  const [startDate, setStartDate] = useState('')

  const start = useRef(null)
  const end = useRef(null)
  const date = useRef(null)
  const wallet = useRef(null)
  const status = useRef(null)

  return (
    <S.FilterWrapper>
      <S.ValueWrapper>
        <S.FilterGroup>
          <label htmlFor="">Valores</label>
          <S.ValueStart
            ref={start}
            placeholder="Valor inicial"
            onChange={({ target }) => {
              setFilterAmountStart(target.value)
            }}
          />
          <S.ValueEnd
            ref={end}
            placeholder="Valor final"
            onChange={({ target }) => {
              setStartDate('')
              wallet.current.value = ''
              status.current.value = ''
              // ----------------------------
              setFilterAmountEnd(target.value)
              // ----------------------------
              setActualPage(1)
            }}
          />
        </S.FilterGroup>
      </S.ValueWrapper>

      <S.FilterGroup>
        <label htmlFor="">Data</label>
        <DatePicker
          ref={date}
          selected={startDate}
          placeholderText="Selecione"
          onChange={(date) => {
            start.current.value = ''
            end.current.value = ''
            wallet.current.value = ''
            status.current.value = ''
            // ----------------------------
            setStartDate(date)
            setFilterDate(format(date, 'dd-MM-yyyy'))
            // ----------------------------
            setActualPage(1)
          }}
        />
      </S.FilterGroup>

      <S.FilterGroup>
        <label htmlFor="">Carteira</label>
        <S.FilterSelect
          ref={wallet}
          onChange={({ target }) => {
            start.current.value = ''
            end.current.value = ''
            setStartDate('')
            status.current.value = ''
            // ----------------------------
            setFilterWallet(target.value)
            // ----------------------------
            setActualPage(1)
          }}
        >
          <option value="">Status</option>
          <option value="shipay-ewallet-mock">Shipay Ewallet Mock</option>
          <option value="shipay-ewallet-mock2">Shipay Ewallet Mock2</option>
          <option value="shipay-ewallet-mock3">Shipay Ewallet Mock3</option>
        </S.FilterSelect>
      </S.FilterGroup>

      <S.FilterGroup>
        <label htmlFor="">Carteira</label>
        <S.FilterSelect
          ref={status}
          onChange={({ target }) => {
            start.current.value = ''
            end.current.value = ''
            setStartDate('')
            wallet.current.value = ''
            // ----------------------------
            setFilterStatus(target.value)
            // ----------------------------
            setActualPage(1)
          }}
        >
          <option value="">Selecione</option>
          <option value="approved">Aprovado</option>
          <option value="cancelled">Cancelado</option>
          <option value="expired">Expirado</option>
          <option value="refunded">Extornado</option>
        </S.FilterSelect>
      </S.FilterGroup>
    </S.FilterWrapper>
  )
}

export default Filters
