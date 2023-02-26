import styled from 'styled-components'
import vw from '@/styles/vw';
import Button from '../Button';

const StyledAbout = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    color: white;

    ${vw([
        ['padding-top', 90, 60, 40],
        ['padding-bottom', 90, 120, 80],
        ['padding-left', 120, 60, 20],
        ['padding-right', 120, 60, 20],
    ])}
`

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    top: 0;
    left: 0;
`

const CoreValues = styled.h2`
    ${vw([
        ['margin-bottom', 0, 90, 60]
    ])}
`

const MissionStatement = styled.div`
    ${vw([
        ['position', 'absolute', 'relative', 'relative'],
        ['width', 606, '100%', '100%'],
        ['right', 120, 'unset', 'unset'],
        ['bottom', 90, 'unset', 'unset']
    ])}
`;

const _p = styled.p`
    ${vw([
        ['margin-bottom', 60, 60, 30]
    ])} 
`

export default function About() {
  return (
    <StyledAbout>
        <Overlay />
        <CoreValues className="h2_large">
            ETHICS<br/>
            INNOVATION<br/>
            EXCELLENCE<br/>
            SUSTAINABILITY
        </CoreValues>
        <MissionStatement>
            <_p>
                At OVIS Group, our mission is to be the premier developer of multi-family rental 
                properties in the markets we serve. We strive to exceed the expectations of our 
                residents by creating exceptional properties that are thoughtfully designed, expertly 
                crafted, eco-friendly, and located in the most desirable neighborhoods. With a focus 
                on innovation, service, and sustainability, we aim to be a leader in our industry and 
                a valuable member of our communities.
            </_p>
            <Button />
        </MissionStatement>
    </StyledAbout>
  )
}

