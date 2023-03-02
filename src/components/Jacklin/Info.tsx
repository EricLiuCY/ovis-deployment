import vw from '@/styles/vw';
import styled from 'styled-components';

import { JacklinSection1 } from '../../../types';
import LinesAndParagraphs from '../../GROQ/utils/LinesNParagraphs';

export interface InfoProps {
    jacklinSection1: JacklinSection1
}

const StyledInfo = styled.section`
    width: 100%;
    /* height: 100vh; */
    position: relative;
    color: white;
    display: flex;
    justify-content: space-between;
    ${vw([
        ['flex-direction', 'row', 'column', 'column'],
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
    background: rgba(0, 0, 0, 0.8);
    z-index: -1;
    top: 0;
    left: 0;
`

const Title = styled.h2`
    ${vw([
        ['margin-bottom', 0, 60, 30]
    ])}
`


const ProjectName = styled.h1`
    opacity: 0.5;
    white-space: nowrap;
    width: 100%;
    text-align: center;
    ${vw([
        ['position', 'absolute', 'relative', 'relative'],
        ['top', '50%', 'unset', 'unset'],
        ['left', '50%', 'unset', 'unset'],
        ['transform', 'translate(-50%, -50%)', 'none', 'none'],
        ['margin-bottom', 0, 60, 30],
        ['font-size', 60, 30, 14],
    ])}
`


const Description = styled.p`
    ${vw([
        ['width', 600, '100%', '100%'],
    ])}
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${vw([
        ['width', 600, '100%', '100%']
    ])}
`

const StatusBlock = styled.div`
    width: 100%;
    background: linear-gradient(90deg, #EDC978 0%, rgba(237, 201, 120, 0) 100%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    ${vw([
        ['height', 80, 60, 40],
        ['padding-right', 20, 20, 20],
        ['margin-bottom', 0, 20, 20]
    ])}
`
const StatusInfo = styled.p`
    
`

export default function Info({ jacklinSection1 }: InfoProps) {
  return (
    <StyledInfo>
        <Overlay />
        <Title className="h2_large">
            <LinesAndParagraphs value={jacklinSection1.title.lines}/>
        </Title>
        <ProjectName className="strapline">Jacklin Residences</ProjectName>
        <Content>
            <StatusBlock>
                <StatusInfo className="strapline">
                    <LinesAndParagraphs value={jacklinSection1.caption.lines}/>
                </StatusInfo>
            </StatusBlock>
            <Description>
                <LinesAndParagraphs value={jacklinSection1.description.paragraphs}/>
            </Description>
        </Content>
        
    </StyledInfo>
  )
}

