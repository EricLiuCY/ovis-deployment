import vw, { vwDesktop } from '@/styles/vw';
import sanityClient from '@/utils/sanity/client';
import { withAssetFileName } from '@/utils/sanity/index';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import { JacklinSection2 } from '../../../types';
import LinesAndParagraphs from '../../GROQ/utils/LinesNParagraphs';

export interface GalleryProps {
  jacklinSection2: JacklinSection2
}

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
    ['height', '90%', 100, 50],
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

function MyImage({ image, alt }: { image: any, alt: string}) {
  // @ts-ignore
  const imageProps = useNextSanityImage(sanityClient, image)
  return (
    <>
      {/*// @ts-ignore */}
      <StyledImage {...imageProps} loader={withAssetFileName} alt={alt}/>
    </>
  )
}

export default function Gallery({ jacklinSection2 }: GalleryProps) {
  return (
    <StyledJacklin>
        <Overlay />
        <JacklinResidences className="h2_large">
          <LinesAndParagraphs value={jacklinSection2.title.lines}/>
        </JacklinResidences>
        <ImageWrapper>
          {jacklinSection2.imageGallery.map((image, index) => 
            (
              <Parallax translateY={[-(index - 2) * 8, 0]} key={index} shouldAlwaysCompleteAnimation>
                <MyImage image={image.image} alt={image.alt} />
              </Parallax>
            )
          )}
        </ImageWrapper>
        <Description>
          <LinesAndParagraphs value={jacklinSection2.description.paragraphs}/>
        </Description>
    </StyledJacklin>
  )
}

