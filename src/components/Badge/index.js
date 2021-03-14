import * as S from './styled'

const Badge = ({ status }) => (
  <S.BadgeWrapper status={status}>{status}</S.BadgeWrapper>
)

export default Badge
