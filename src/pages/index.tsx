import { Inter } from 'next/font/google'
import styled from 'styled-components'
import About from '../components/Home/About'
import Hero from '../components/Home/Hero'

const inter = Inter({ subsets: ['latin'] })

const Video = styled.video`
  width: 100%;
  object-fit: cover;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`

const Red = styled.div`
  background: red;
  height: 100px;
  width: 100px;
`

const Root = styled.main`
  position: relative;
`

export default function Home() {
  return (
    <Root>
      {/* Background */}
      <Video autoPlay loop muted>
        <source src={'/background.mp4'} />
      </Video>

      {/* Page Structure */}
      <Hero />
      <About />
      
    </Root>
  )
}

