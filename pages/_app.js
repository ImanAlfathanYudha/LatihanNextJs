import Layout from '../comps/layout'
import '../styles/globals.css'
import '../styles/layout.css'
import '../styles/About.Module.scss'
import '../styles/Contact.Module.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {ThemeProvider} from 'styled-components'

const theme = {
  colors: {
    primary: '#35597D',
  },
  fontSize: {
    big: '50px',
    mid: '30px',
    small: '12px'
  }
}

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  if (Component.getLayout) {
    return Component.getLayout(
    <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    </ThemeProvider>
    )
  }
  return (
    <Layout>
      <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp
// ntar jgn lupa ketik
// npm i styled-components
// npm i sass
// npm install --save bootstrap@^4.0.0-alpha.6 react-bootstrap@^0.32.1
