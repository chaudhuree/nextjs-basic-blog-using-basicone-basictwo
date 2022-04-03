import Layout from '../components/Layout'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return <>
  {/* make some change here to render data in layoute */}
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
