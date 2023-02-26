import styled from 'styled-components'
import vw from '@/styles/vw';

export interface HeroProps {
    valueProp: string
}

const StyledHero = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
`

const Transition = styled.div`
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    ${vw([
        ['height', '50%', 100, 150]
    ])}
`

const Strapline = styled.h1`
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    ${vw([
        ['width', 1000, '100%', '100%'],
        ['bottom', 60, 40, 40],
        ['padding-left', 120, 60, 20],
        ['padding-right', 120, 60, 20],
    ])}
`

export default function Hero({ valueProp} : HeroProps) {
  return (
    <StyledHero>
        <Transition />
        <Strapline className='strapline'>
            {valueProp}
        </Strapline>
    </StyledHero>
  )
}

