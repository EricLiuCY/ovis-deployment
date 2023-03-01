import '@/styles/fonts.css';
import Lenis from '@studio-freight/lenis';
import type { AppProps } from 'next/app';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import GlobalStyle from '@/styles/global'
import { useEffect } from 'react';
import Header from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     direction: 'vertical', // vertical, horizontal
  //     gestureDirection: 'vertical', // vertical, horizontal, both
  //     smooth: true,
  //     mouseMultiplier: 1,
  //     smoothTouch: false,
  //     touchMultiplier: 2,
  //     infinite: false,
  //   })
    
  //   //get scroll value
  //   // lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  //   //   console.log({ scroll, limit, velocity, direction, progress })
  //   // })
    
  //   function raf(time: any) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }
    
  //   requestAnimationFrame(raf)
  // }, [])
  return (
    <>
      <Header/>
      <GlobalStyle />
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  )
}
