import '../styles/globals.css'
import {Provider} from 'react-redux'
import store from '../src/store/store'
import Nav from '../src/Components/Nav'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav></Nav>
      <Component {...pageProps} />
    </Provider>
  )
  
}

export default MyApp
