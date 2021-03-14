import { OrdersListStorage } from '../context/OrdersListContext'
import OrdersList from '../components/OrdersList'
import Pagination from '../components/Pagination'
import Filters from '../components/Filters'
import Modal from '../components/Modal'

const Orders = () => (
  <OrdersListStorage>
    <Filters />
    <OrdersList />
    <Pagination />
    <Modal />
  </OrdersListStorage>
)

export default Orders
