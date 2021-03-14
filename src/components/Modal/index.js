import { useContext } from 'react'
import { OrdersListContext } from '../../context/OrdersListContext'
import * as S from './styled'

import Loading from '../Loading'

// TODO: Separete Content of Component
import OrderContent from './OrderContent'

const Modal = () => {
  const {
    isModalOpen,
    isDetailsLoading,
    setIsModalOpen,
    modalData,
  } = useContext(OrdersListContext)

  return (
    <S.Modal isOpen={isModalOpen}>
      <S.ModalWrapper>
        <S.ModalClose onClick={() => setIsModalOpen(false)} />
        <S.ModalContent>
          {isDetailsLoading ? <Loading /> : <OrderContent data={modalData} />}
        </S.ModalContent>
      </S.ModalWrapper>
    </S.Modal>
  )
}

export default Modal
