import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'
import vw, { vwDesktop } from '@/styles/vw';
import Button from '../Button';

const StyledJacklin = styled.section`
    width: 100%;
    position: relative;
    color: white;

    ${vw([
        ['padding-top', 90, 60, 40],
        ['padding-bottom', 90, 120, 80],
        ['padding-left', 120, 60, 20],
        ['padding-right', 120, 60, 20],
        ['min-height', 900, 'unset', 'unset'],
        ['max-height', 1200, 'unset', 'unset'],
        ['height', '100vh', 'auto', 'auto']
    ])}
`

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    top: 0;
    left: 0;
`
const JacklinResidences = styled.h2``

const ImageWrapper = styled.div`
    display: flex;

    ${vw([
      ['margin-top', 0, 40, 20],
      ['margin-bottom', 0, 60, 20],
      ['position', 'absolute', 'relative', 'relative'],
      ['flex-direction', 'row', 'column', 'column'],
      ['top', 90, 'unset', 'unset'],
      ['right', 120, 'unset', 'unset'],
      ['height', `calc(100% - ${vwDesktop(2 * 90)})`, 'auto', 'auto'],
      ['gap', 2.5, 2.5, 2.5]
    ])}
`

const StyledImage = styled(Image)`
  object-fit: cover;
  ${vw([
    ['width', 200, '100%', '100%'],
    ['height', '100%', 100, 50],
  ])}
`

const Description = styled.div`
    ${vw([
        ['position', 'absolute', 'relative', 'relative'],
        ['width', 606, '100%', '100%'],
        ['left', 120, 'unset', 'unset'],
        ['bottom', 90, 'unset', 'unset']
    ])}
`;

const _p = styled.p`
    ${vw([
        ['margin-bottom', 60, 40, 20]
    ])} 
`

export default function Jacklin() {
  return (
    <StyledJacklin>
        <Overlay />
        <JacklinResidences className="h2_large">
            Jacklin<br />
            Residences
        </JacklinResidences>
        <ImageWrapper>
          <Parallax className="parallax" translateY={[-5, 0]} shouldAlwaysCompleteAnimation>
            <StyledImage src={'/NCCA220049_3.jpg'} width={1920} height={1080} alt="Jacklin 1" />
          </Parallax>
          <Parallax className="parallax" translateY={[-10, 0]} shouldAlwaysCompleteAnimation>
            <StyledImage src={'/NCCA220049_4.jpg'} width={1920} height={1080} alt="Jacklin 1" />
          </Parallax>
          <Parallax className="parallax" translateY={[-15, 0]} shouldAlwaysCompleteAnimation>
          <StyledImage src={'/NCCA220049_5.jpg'} width={1920} height={1080} alt="Jacklin 1" />
          </Parallax>
          <Parallax className="parallax" translateY={[-20, 0]} shouldAlwaysCompleteAnimation>
          <StyledImage src={'/NCCA220049_6.jpg'} width={1920} height={1080} alt="Jacklin 1" />
          </Parallax>
        </ImageWrapper>
        <Description>
            <_p>
              At OVIS Group, our mission is to be the premier developer of multi-family rental 
              properties in the markets we serve. We strive to exceed the expectations of our 
              residents by creating exceptional properties that are thoughtfully designed, expertly 
              crafted, eco-friendly, and located in the most desirable neighborhoods. With a focus on 
              innovation, service, and sustainability, we aim to be a leader in our industry and a 
              valuable member of our communities.
            </_p>
            <Button text={"Explore"} />
        </Description>
    </StyledJacklin>
  )
}

