import Header from '../components/Header'

import GlobalStyles from '../assets/styles/globalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
