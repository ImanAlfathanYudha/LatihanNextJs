import Layout from '../comps/layout'
import '../styles/globals.css'
// import '../styles/About.Module.scss'
// import '../styles/Contact.Module.scss'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {ThemeProvider} from 'styled-components'

const theme = {
  colors: {
    primary: '#35597D',
  },
}
function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <Layout>
      <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}

// ntar jgn lupa ketik
// npm i styled-components
// npm i sass
// npm install --save bootstrap@^4.0.0-alpha.6 react-bootstrap@^0.32.1
export default MyApp
