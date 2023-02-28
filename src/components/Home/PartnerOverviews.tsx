import vw from '@/styles/vw';
import sanityClient from '@/utils/sanity/client';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';

import Logo from '@/assets/Logo';
import { withAssetFileName } from '@/utils/sanity/index';
import { useNextSanityImage } from 'next-sanity-image';
import { PartnerOverview } from '../../../types';

interface PartnerOverviewProps {
    partnerOverview: PartnerOverview,
}

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

function PartnerOverview({ partnerOverview }: PartnerOverviewProps) {
    // @ts-ignore
    const imageProps = useNextSanityImage(sanityClient, partnerOverview.profilePicture)
    return (
        <div>
            {/*// @ts-ignore */}
            <Image {...imageProps} loader={withAssetFileName} height={100} width={50} alt={'asd'}/>
            <h2>{partnerOverview.founderName}</h2>
            <h2>{partnerOverview.founderTitle}</h2>
            <h2>{partnerOverview.founderSummary}</h2>
        </div>
    )
}

export default function PartnerOverviews({ partnerOverviews }: PartnerOverviewsProps) {
  return (
    <StyledAbout>
        {
            partnerOverviews.map((partnerOverview, index) => <PartnerOverview key={index} partnerOverview={partnerOverview}/>)
        }
    </StyledAbout>
  )
}

