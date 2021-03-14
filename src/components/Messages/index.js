import * as S from './styled'

const Messages = ({ message, status }) => (
  <S.MessageWrapper status={status}>{message}</S.MessageWrapper>
)

export default Messages
