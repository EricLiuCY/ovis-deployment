import styled from 'styled-components'
import vw from '@/styles/vw';

const StyledAbout = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    color: white;
`

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: -1;
`


export default function About() {
  return (
    <StyledAbout>
        <Overlay />
        <h1>Test</h1>
    </StyledAbout>
  )
}

