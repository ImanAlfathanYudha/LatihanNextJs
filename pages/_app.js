import Layout from '../comps/layout'
import '../styles/globals.css'
import '../styles/About.Module.scss'
import '../styles/Contact.Module.scss'
// import 'bootstrap/dist/css/bootstrap.min.css '

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
