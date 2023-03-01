import vw from '@/styles/vw';
import styled from 'styled-components';

import { PartnerOverview } from '../../../types';
import Partner from './Partner';


export interface PartnerOverviewsProps {
    partnerOverviews: PartnerOverview[]
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


export default function PartnerOverviews({ partnerOverviews }: PartnerOverviewsProps) {
  return (
    <StyledAbout>
        <Overlay />
        {
            partnerOverviews.map((partnerOverview, index) => <Partner key={index} partner={partnerOverview}/>)
        }
    </StyledAbout>
  )
}

