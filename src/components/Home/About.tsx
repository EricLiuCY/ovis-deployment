import vw from '@/styles/vw';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import Button from '../Button';

import Logo from '@/assets/Logo';
import { AboutSection } from '../../../types';

export interface AboutProps {
    aboutSection: AboutSection
}

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
        ['min-height', 900, 0, 0],
    ])}
`

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    /* height: 100vh; */
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    top: 0;
    left: 0;
`

const Watermark = styled(Parallax)`
    position: absolute;
    top: 50%;
    left: 50%;
`

const StyledLogo = styled(Logo)`
    opacity: 0.1;
    transform: translate(-50%, -50%);
    ${vw([
        ['display', 'block', 'none', 'none'],
        ['width', 600, 0, 0],
        ['height', 228, 0, 0],
    ])}
`;

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

export default function About({ aboutSection }: AboutProps) {
  return (
    <StyledAbout>
        <Overlay />
        {/* <Watermark translateX={[-25, 25]}>
            <StyledLogo />
        </Watermark> */}
        <CoreValues className="h2_large">
            {aboutSection.coreValues.map((value, index) => (
                <div key={index}> {value.coreValue} </div>
            ))}
        </CoreValues>
        <MissionStatement>
            <_p>
                {aboutSection.missionStatement}
            </_p>
            <Button text={aboutSection.cta} />
        </MissionStatement>
    </StyledAbout>
  )
}

