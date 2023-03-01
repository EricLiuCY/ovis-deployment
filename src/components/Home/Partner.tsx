import { PartnerOverview as Partner } from '@/../types';
import styled from 'styled-components';
import { useNextSanityImage } from 'next-sanity-image';
import sanityClient from '@/utils/sanity/client'
import { withAssetFileName } from '@/utils/sanity/index'
import Image from 'next/image';
import vw from '../../styles/vw';
import Link from 'next/link';

interface PartnerProps {
    partner: Partner,
}

const Root = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const HeadshotContainer = styled.div`
    position: relative;
    ${vw([
        ['height', 350, 350, 200],
        ['width', 480, '100%', '100%']
    ])}
`

const Headshot = styled(Image)`
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
    filter: brightness(0.75);
`

const Nameblock = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, #EDC978 0%, rgba(237, 201, 120, 0) 100%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    ${vw([
        ['height', 80, 60, 40],
        ['padding-right', 50, 30, 20],
    ])}
`

const FoundarySummary = styled.p`
    ${vw([
        ['margin-top', 20, 20, 20,],
        ['width', 480, '100%', '100%'],
        ['height', 175, 'unset', 'unset']
    ])}
`

const LearnMore = styled.a`
    ${vw([
        ['margin-top', 10, 10, 10]
    ])}
`

function Partner({ partner }: PartnerProps) {
    // @ts-ignore
    const imageProps = useNextSanityImage(sanityClient, partner.profilePicture.image)
    return (
        <Root>
            <HeadshotContainer>
                {/*// @ts-ignore */}
                <Headshot {...imageProps} loader={withAssetFileName} alt={partner.profilePicture}/>
                <Nameblock>
                    <p className="caption">{partner.founderName}</p>
                    <p className="subcaption">{partner.founderTitle}</p>
                </Nameblock>
            </HeadshotContainer>
            {/* <h2>{partner.founderName}</h2>
            <h2>{partner.founderTitle}</h2> */}
            <FoundarySummary>
                {partner.founderSummary}
            </FoundarySummary>
            <Link style={{ color: '#ffffff' }} href="/">
                <LearnMore className="cta">learn more</LearnMore>
            </Link>
        </Root>
    )
}

export default Partner;