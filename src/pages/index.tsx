import { GetServerSideProps } from 'next'
import styled from 'styled-components'
import { Homepage, Theme } from '../../types'
import About from '../components/Home/About'
import Hero from '../components/Home/Hero'
import Jacklin from '../components/Home/Jacklin'
import fetchHomePage from '../GROQ/quries/fetchHomepage'
import fetchTheme from '../GROQ/quries/fetchTheme'
import { getFileAsset } from '@sanity/asset-utils'
import client from '../utils/sanity/client'

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

const Red = styled.div`
  background: red;
  height: 100px;
  width: 100px;
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
      <Video autoPlay loop muted>
        <source src={backgroundVideo.url} />
      </Video>

      {/* Page Structure */}
      <Hero valueProp={homepage.valueProp}/>
      <About coreValues={homepage.coreValues} missionStatement={homepage.missionStatement}/>
      <Jacklin />
    </Root>
  )
}

export const getServerSideProps : GetServerSideProps<HomepageProps> = async () => {
  const homepage = await fetchHomePage('en');
  const theme = await fetchTheme('en');
  return {
    props: {
      homepage,
      theme
    },
  }
}
