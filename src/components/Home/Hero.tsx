import styled from 'styled-components'
import vw from '@/styles/vw';

const StyledHero = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
`

const Transition = styled.div`
position: absolute;
width: 1760px;
height: 200px;
left: 0px;
top: 700px;

background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%);
`

const Strapline = styled.h1`
    text-align: center;
    position: absolute;
    /* bottom:  */
    left: 50%;
    transform: translateX(-50%);
    color: white;
    ${vw([
        ['width', 530, 546, 360],
        ['bottom', 60, 40, 40]
    ])}
`

export default function Hero() {
  return (
    <StyledHero>
        <Transition />
        <Strapline className='strapline'>
            Redefining Modern Western Coast Living
            Through Ethical Development Practices
        </Strapline>
    </StyledHero>
  )
}

