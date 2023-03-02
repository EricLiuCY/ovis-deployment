import { JacklinPage } from '@/../types'
import Hero from '@/components/Jacklin/Hero'
import sanityClient from '@/utils/sanity/client'
import { withAssetFileName } from '@/utils/sanity/index'
import { GetServerSideProps } from 'next'
import { useNextSanityImage } from 'next-sanity-image'
import styled from 'styled-components'
import Gallery from '../../components/Jacklin/Gallery'
import Info from '../../components/Jacklin/Info'
import fetchJacklinPage from '../../GROQ/queries/fetchJacklinPage'

export interface JacklinProps {
  jacklinPage: JacklinPage
}

const Video = styled.video`
  width: 100%;
  object-fit: cover;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`

// const Background = styled(Image)
const Background = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  filter: brightness(70%);
`;

const Root = styled.main`
  position: relative;
`

function MyImage({ image, alt }: { image: any, alt: string}) {
  // @ts-ignore
  const imageProps = useNextSanityImage(sanityClient, image)
  return (
    <>
      {/*// @ts-ignore */}
      <Background {...imageProps} loader={withAssetFileName} alt={alt}/>
    </>
  )
}

export default function JacklinResidences({ jacklinPage }: JacklinProps) {
  // const videoAssetFor = (source: any) => source && getFileAsset(source, client.config())
  // const backgroundVideo = videoAssetFor(theme.backgroundVideo)
  return (
    <Root>
      {/* Background */}
      {/* <Video autoPlay loop muted playsInline>
        <source src={backgroundVideo.url} />
      </Video> */}
      <MyImage
        image={jacklinPage.backgroundImage.image}
        alt={jacklinPage.backgroundImage.alt}
      />

      {/* Page Structure */}
      <Hero valueProp={jacklinPage.valueProp}/>
      <Info jacklinSection1={jacklinPage.jacklinSection1}/>
      <Gallery jacklinSection2={jacklinPage.jacklinSection2}/>
    </Root>
  )
}

export const getServerSideProps : GetServerSideProps<JacklinProps> = async () => {
  const jacklinPage = await fetchJacklinPage('en');
  return {
    props: {
      jacklinPage,
    },
  }
}
