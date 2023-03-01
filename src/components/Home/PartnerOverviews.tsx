import vw from '@/styles/vw';
import styled from 'styled-components';

import { PartnerOverview } from '../../../types';
import LinesAndParagraphs from '../../GROQ/utils/LinesNParagraphs';
import Partner from './Partner';


export interface PartnerOverviewsProps {
    partnerOverviews: PartnerOverview[]
}

const StyledPartnerOverview = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    color: white;

    ${vw([
        ['padding-top', 90, 60, 40],
        ['padding-bottom', 90, 120, 80],
        ['padding-left', 120, 60, 20],
        ['padding-right', 120, 60, 20],
        // ['min-height', 900, 'unset', 'unset'],
        // ['max-height', 1200, 'unset', 'unset'],
        // ['height', '100vh', 'auto', 'auto']
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

const MeetTheTeam = styled.h2`
    ${vw([
        ['margin-bottom', 90, 60, 20]
    ])}
`

const PartnerSection = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    ${vw([
        ['flex-direction', 'row', 'column', 'column'],
        ['gap','unset', 60, 40]
    ])}
`

export default function PartnerOverviews({ partnerOverviews }: PartnerOverviewsProps) {
  return (
    <StyledPartnerOverview>
        <Overlay />
        <MeetTheTeam className='h2_large'>
            Meet The Team
        </MeetTheTeam>
        <PartnerSection>
        {
            partnerOverviews.map((partnerOverview, index) => <Partner key={index} partner={partnerOverview}/>)
        }
        </PartnerSection>
    </StyledPartnerOverview>
  )
}

