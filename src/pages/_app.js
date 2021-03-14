import Header from '../components/Header'
import Footer from '../components/Footer'

import GlobalStyles from '../assets/styles/globalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
