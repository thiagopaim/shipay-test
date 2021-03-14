import { useEffect, useCallback, useState, createContext } from 'react'
import { api } from '../services/api'

export const OrdersListContext = createContext()

export const OrdersListStorage = ({ children }) => {
  const [ordersList, setOrdersList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDetailsLoading, setIsDetailsLoading] = useState(true)

  // ...
  const [actualPage, setActualPage] = useState(1)
  const [filterStatus, setFilterStatus] = useState('')
  const [filterWallet, setFilterWallet] = useState('')
  const [filterDate, setFilterDate] = useState('')
  const [filterAmountStart, setFilterAmountStart] = useState('')
  const [filterAmountEnd, setFilterAmountEnd] = useState('')

  // ..
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState({})

  const handlePaginate = (array, pageNumber) => {
    return array.slice((pageNumber - 1) * 15, pageNumber * 15)
  }

  const handleGetOrders = useCallback(async () => {
    setIsLoading(true)

    try {
      const {
        data: { orders },
      } = await api.get('pedidos')

      let newOrders = orders

      if (filterAmountStart !== '' && filterAmountEnd) {
        newOrders = await orders.filter((item) => {
          return (
            item.total_order >= filterAmountStart &&
            item.total_order <= filterAmountEnd
          )
        })
      }

      if (filterDate !== '') {
        newOrders = await orders.filter((item) => {
          return item.update_datetime.substr(0, 10) === filterDate
        })
      }

      if (filterWallet !== '') {
        newOrders = await orders.filter((item) => {
          return item.wallet_payment_name === filterWallet
        })
      }

      if (filterStatus !== '') {
        newOrders = await orders.filter((item) => {
          return item.status === filterStatus
        })
      }

      setOrdersList(handlePaginate(newOrders, actualPage, filterStatus))
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [actualPage, filterDate, filterAmountEnd, filterWallet, filterStatus])

  const handleGetOrderDetails = useCallback(async (id) => {
    setModalData({})
    setIsDetailsLoading(true)

    try {
      const { data } = await api.get(`pedido/${id}`)
      setModalData(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsDetailsLoading(false)
    }
  }, [])

  const handleEscKey = useCallback((event) => {
    if (event.keyCode === 27) {
      setIsModalOpen(false)
    }
  }, [])

  useEffect(() => {
    handleGetOrders()
    document.addEventListener('keydown', handleEscKey, false)
  }, [actualPage, handleGetOrders])

  return (
    <OrdersListContext.Provider
      value={{
        ordersList,
        actualPage,
        setActualPage,
        setFilterStatus,
        setFilterWallet,
        setFilterDate,
        setFilterAmountStart,
        setFilterAmountEnd,
        isDetailsLoading,
        setIsModalOpen,
        isModalOpen,
        isLoading,
        handleGetOrderDetails,
        modalData,
      }}
    >
      {children}
    </OrdersListContext.Provider>
  )
}
