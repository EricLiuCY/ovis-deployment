import { GetServerSideProps } from 'next'
import styled from 'styled-components'
import { Homepage, Theme } from '@/../types'
import About from '@/components/Home/About'
import Hero from '@/components/Jacklin/Hero'
import Jacklin from '@/components/Home/Jacklin'
import fetchHomePage from '@/GROQ/queries/fetchHomepage'
import fetchTheme from '@/GROQ/queries/fetchTheme'
import { getFileAsset } from '@sanity/asset-utils'
import client from '@/utils/sanity/client'
import PartnerOverview from '@/components/Home/PartnerOverviews'
import Info from '../../components/Jacklin/Info'
import Gallery from '../../components/Jacklin/Gallery'

export interface JacklinProps {
  homepage: Homepage
  theme: Theme
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

export default function Home({ homepage, theme }: JacklinProps) {
  // const videoAssetFor = (source: any) => source && getFileAsset(source, client.config())
  // const backgroundVideo = videoAssetFor(theme.backgroundVideo)
  return (
    <Root>
      {/* Background */}
      {/* <Video autoPlay loop muted playsInline>
        <source src={backgroundVideo.url} />
      </Video> */}
      <Background
        src={"https://cdn.discordapp.com/attachments/709193098412032081/1080436997979635812/VIEW_01.jpg"}
      />

      {/* Page Structure */}
      <Hero valueProp={homepage.valueProp}/>
      <Info />
      <Gallery />
    </Root>
  )
}

export const getServerSideProps : GetServerSideProps<JacklinProps> = async () => {
  const homepage = await fetchHomePage('en');
  const theme = await fetchTheme('en');
  return {
    props: {
      homepage,
      theme
    },
  }
}
