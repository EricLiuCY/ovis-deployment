import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import styled from 'styled-components'
import { Homepage, Theme } from '../../types'
import About from '../components/Home/About'
import Hero from '../components/Home/Hero'
import Jacklin from '../components/Home/Jacklin'
import fetchHomePage from '../GROQ/quries/fetchHomepage'
import fetchTheme from '../GROQ/quries/fetchTheme'
import { getFileAsset } from '@sanity/asset-utils'
import client from '../utils/sanity/client'
import PartnerOverview from '../components/Home/PartnerOverviews'

export interface HomepageProps {
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

const Root = styled.main`
  position: relative;
`

export default function Home({ homepage, theme }: HomepageProps) {
  const videoAssetFor = (source: any) => source && getFileAsset(source, client.config())
  const backgroundVideo = videoAssetFor(theme.backgroundVideo)
  return (
    <Root>
      {/* Background */}
      <Video autoPlay loop muted playsInline>
        <source src={backgroundVideo.url} />
      </Video>

      {/* Page Structure */}
      <Hero valueProp={homepage.valueProp}/>
      <About aboutSection={homepage.aboutSection}/>
      <Jacklin featureProject={homepage.featureProject}/>
      <PartnerOverview
        partnerOverviews={homepage.partnerOverviews}
      />
    </Root>
  )
}

export const getServerSideProps : GetServerSideProps<HomepageProps> = async (ctx: GetServerSidePropsContext) => {
  const homepage = await fetchHomePage('en');
  const theme = await fetchTheme('en');
  return {
    props: {
      homepage,
      theme
    },
  }
}
