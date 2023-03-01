import vw from '@/styles/vw';
import sanityClient from '@/utils/sanity/client';
import { withAssetFileName } from '@/utils/sanity/index';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import styled from 'styled-components';
import ContentBox from './ContentBox';
import { PersonProps } from './PersonLeft';

const StyledPersonRight = styled.section`
    width: 100%;
    position: relative;
    color: white;
    display: flex;
    justify-content: space-between;
    ${vw([
        ['padding-top', 90, 40, 30],
        ['padding-bottom', 90, 40, 30],
        ['flex-direction', 'row', 'column-reverse', 'column-reverse'],
        ['padding-left', 0, 60, 20],
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

const HeadshotContainer = styled.div`
  position: relative;
  ${vw([
    ['width', 600, '100%', '100%'],
    ['height', '100%', 350, 200],
  ])}
`;

// styled(Image)
const Headshot = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.75);
`

const Nameblock = styled.div`
    width: 100%;
    /* position: absolute;
    bottom: 0;
    left: 0; */
    background: linear-gradient(90deg, rgba(237, 201, 120, 0) 0%, #EDC978 100%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    ${vw([
        ['display', 'flex', 'none', 'none'],
        ['height', 80, 0, 0],
        ['padding-left', 120, 0, 0],
        ['width', 880, 0, 0],
        ['margin-bottom', 40, 0, 0]
    ])}
`

const MinNameblock = styled.div`
    width: 100%;
    background: linear-gradient(90deg, #EDC978 0%, rgba(237, 201, 120, 0) 100%);

    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    left: 0;
    bottom: 0;
    ${vw([
        ['display', 'none', 'flex', 'flex'],
        ['height', 0, 60, 40],
        ['padding-right', 0, 30, 20],
    ])}
`

const Name = styled.h2``
const Title = styled.h3``

const Content = styled.div`
  display: flex;
  flex-direction: column;
`
function MyImage({ image, alt }: { image: any, alt: string}) {
  // @ts-ignore
  const imageProps = useNextSanityImage(sanityClient, image)
  return (
    <>
      {/*// @ts-ignore */}
      <Headshot {...imageProps} loader={withAssetFileName} alt={alt}/>
    </>
  )
}

export default function PersonRight({ partnerDetail }: PersonProps) {
  return (
    <StyledPersonRight id={partnerDetail.name}>
        <Overlay />
        <Content>
          <Nameblock>
          <Name className="caption">{partnerDetail.founderName}</Name>
            <Title className="subcaption">{partnerDetail.founderTitle}</Title>
          </Nameblock>
          <ContentBox content={partnerDetail.content} right={false}/>
        </Content>
        <HeadshotContainer>
          <MyImage image={partnerDetail.profilePicture.image} alt={partnerDetail.profilePicture.alt}/>
          <MinNameblock>
          <Name className="caption">{partnerDetail.founderName}</Name>
            <Title className="subcaption">{partnerDetail.founderTitle}</Title>
          </MinNameblock>
        </HeadshotContainer>
    </StyledPersonRight>
  )
}

