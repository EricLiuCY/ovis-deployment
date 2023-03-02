import vw from '@/styles/vw';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import Button from '../Button';

import Logo from '@/assets/Logo';
import { AboutSection } from '../../../types';
import LinesAndParagraphs from '../../GROQ/utils/LinesNParagraphs';
import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';

export interface AboutProps {
    aboutSection: AboutSection
}

const StyledAbout = styled.section`
    width: 100%;
    /* height: 100vh; */
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
    /* height: 100vh; */
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

export default function About({ aboutSection }: AboutProps) {
  return (
    <StyledAbout>
        <Overlay />

        <CoreValues className="h2_large">
            <LinesAndParagraphs value={aboutSection.coreValues.lines}/>
        </CoreValues>
        <MissionStatement>
            <_p>
                <LinesAndParagraphs value={aboutSection.missionStatement.paragraphs}/>
            </_p>
            <Link href={"/about"} style={{ textDecoration: 'none'}}>
                <Button text={aboutSection.cta} />  
            </Link>
        </MissionStatement>
    </StyledAbout>
  )
}

