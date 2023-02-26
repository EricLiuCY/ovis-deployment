import { Inter } from 'next/font/google'
import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

const Video = styled.video`
  width: 100%;
  object-fit: cover;
  height: 100vh;
`

const Red = styled.div`
  background: red;
  height: 100px;
  width: 100px;
`

export default function Home() {
  return (
    <>
      <Video autoPlay loop muted>
        <source src={'/background.mp4'} />
      </Video>
      <Red />
    </>
  )
}

