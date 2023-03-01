import vw, { vwDesktop } from '@/styles/vw';
import sanityClient from '@/utils/sanity/client';
import { Parallax } from 'react-scroll-parallax';
import { withAssetFileName } from '@/utils/sanity/index';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import styled from 'styled-components';
import { FeatureProject } from '../../../types';
import LinesAndParagraphs from '../../GROQ/utils/LinesNParagraphs';
import Button from '../Button';

export interface JacklinProps {
  featureProject: FeatureProject
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
    background: rgba(0, 0, 0, 0.5);
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
    ['height', '100%', 100, 50],
  ])}
`

const Description = styled.div`
    ${vw([
        ['position', 'absolute', 'relative', 'relative'],
        ['width', 606, '100%', '100%'],
        ['left', 120, 'unset', 'unset'],
        ['bottom', 90, 'unset', 'unset']
    ])}
`;

const _p = styled.p`
    ${vw([
        ['margin-bottom', 60, 40, 20]
    ])} 
`

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

export default function Jacklin({ featureProject }: JacklinProps) {
  return (
    <StyledJacklin>
        <Overlay />
        <JacklinResidences className="h2_large">
            <LinesAndParagraphs value={featureProject.title.lines}/>
        </JacklinResidences>
        <ImageWrapper>
          {featureProject.projectImages.map((image, index) => 
            (
              <Parallax translateY={[-(index + 1) * 5, 0]} key={index} shouldAlwaysCompleteAnimation>
                <MyImage image={image.image} alt={image.alt} />
              </Parallax>
            )
          )}
        </ImageWrapper>
        <Description>
            <_p>
              <LinesAndParagraphs value={featureProject.desc.paragraphs}/>
            </_p>
            <Button text={"Explore"} />
        </Description>
    </StyledJacklin>
  )
}

