import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { allReducers } from '../reducers/reducers'

const store = createStore(allReducers)

function MyApp({ Component, pageProps }: AppProps) {
  return ( <Provider store = {store}>
   <Component {...pageProps} />
  </Provider>)
}

export default MyApp
