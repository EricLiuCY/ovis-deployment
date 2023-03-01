import styled from 'styled-components'
import vw from '@/styles/vw';
import { LocaleLines } from '../../../types';
import LinesAndParagraphs from '../../GROQ/utils/LinesNParagraphs';

export interface HeroProps {
    valueProp: LocaleLines
}

const StyledHero = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    ${vw([
        ['min-height', 600, 400, 400],
        ['height', '100vh', '100vh', '100vh']
    ])}
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
        ['bottom', 60, 40, '15vh'],
        ['padding-left', 120, 60, 20],
        ['padding-right', 120, 60, 20],
    ])}
`

export default function Hero({ valueProp} : HeroProps) {
  return (
    <StyledHero>
        <Transition />
            <Strapline className='straStraplineline'>
                <LinesAndParagraphs value={valueProp.lines} concact={true}/>
            </Strapline>
    </StyledHero>
  )
}
