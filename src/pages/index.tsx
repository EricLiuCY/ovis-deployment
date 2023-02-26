import { Inter } from 'next/font/google'
import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <video autoPlay loop muted>
        <source src={'/background.mp4'} />
      </video>
    </>
  )
}
