import '../styles/globals.css'
import localFont from '@next/font/local'


const myFont = localFont({ src: [
  {
    path: '../public/fonts/HurmeGeometricSans4-Bold.0a9219e.woff2',
    weight: '400',
    style: 'normal',
  },]})

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
