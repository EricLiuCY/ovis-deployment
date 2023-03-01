import styled from 'styled-components'
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
    background: rgba(0, 0, 0, 0.8);
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

const Description = styled.p`
    ${vw([
        ['position', 'absolute', 'relative', 'relative'],
        ['width', 606, '100%', '100%'],
        ['left', 120, 'unset', 'unset'],
        ['bottom', 90, 'unset', 'unset']
    ])}
`;


export default function Gallery() {
  return (
    <StyledJacklin>
        <Overlay />
        <JacklinResidences className="h2_large">
            Disrupting<br/>
            Victoria&apos;s<br/>
            Luxury<br/>
            Rentals
        </JacklinResidences>
        <ImageWrapper>
          <StyledImage src={'/NCCA220049_3.jpg'} width={1920} height={1080} alt="Jacklin 1" />
          <StyledImage src={'/NCCA220049_4.jpg'} width={1920} height={1080} alt="Jacklin 1" />
          <StyledImage src={'/NCCA220049_5.jpg'} width={1920} height={1080} alt="Jacklin 1" />
          <StyledImage src={'/NCCA220049_6.jpg'} width={1920} height={1080} alt="Jacklin 1" />
        </ImageWrapper>
        <Description>
            A 10 story tall concrete building with 80 residential condos and 3 commercial units. 
            A 10 story tall concrete building with 80 residential condos and 3 commercial units. 
            A 10 story tall concrete building with 80 residential condos and 3 commercial units. 
            A 10 story tall concrete building with 80 residential condos and 3 commercial units. 
        </Description>
    </StyledJacklin>
  )
}

