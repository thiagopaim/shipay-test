import { api } from '../services/api'

import Messages from '../components/Messages'

const Home = ({ data }) => {
  return <Messages message={data.message} status={data.status} />
}

export async function getServerSideProps() {
  const { data } = await api.get('health')
  return { props: { data } }
}

export default Home
