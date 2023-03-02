import { PortableText } from '@portabletext/react'
import { getFileAsset } from '@sanity/asset-utils'
import { GetServerSideProps } from 'next'
import styled from 'styled-components'
import { AboutUsPage, Theme } from '../../../types'
import Company from '../../components/About/Company'
import Hero from '../../components/About/Hero'
import PersonLeft from '../../components/About/PersonLeft'
import PersonRight from '../../components/About/PersonRight'
import fetchAboutUsPage from '../../GROQ/queries/fetchAboutUsPage'
import fetchTheme from '../../GROQ/queries/fetchTheme'
import client from '../../utils/sanity/client'

// const components = {
//   block: {
//     // Ex. 1: customizing common block types
//     h2: ({children} : any) => <Test>{children}</Test>,
//     p: ({children} : any) => <p>{children}</p>,
//   },
// }
{/* <Test><PortableText value={aboutUsPage.partnerDetails[0].founderDescription} components={components}/></Test> */}

export interface AboutUsPageProps {
  aboutUsPage: AboutUsPage
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

const Test = styled.div`
  color: red;
`


export default function About({ aboutUsPage, theme }: AboutUsPageProps) {
  const videoAssetFor = (source: any) => source && getFileAsset(source, client.config())
  const backgroundVideo = videoAssetFor(theme.backgroundVideo)
  return (
    <Root>
      <Video autoPlay loop muted playsInline>
        <source src={backgroundVideo.url} />
      </Video>
      <Hero valueProp={aboutUsPage.valueProp}/>
      <Company descriptionTitle={aboutUsPage.descriptionTitle} companyDescription={aboutUsPage.companyDescription}/>
      {
        aboutUsPage.partnerDetails.map((partnerDetail, index) => {
          if (index % 2 == 0) {
            return <PersonLeft key={index} partnerDetail={partnerDetail} />
          } else {
            return <PersonRight key={index} partnerDetail={partnerDetail} />
          }
        })
      }
    </Root>
  )
}

export const getServerSideProps : GetServerSideProps<AboutUsPageProps> = async () => {
  const aboutUsPage = await fetchAboutUsPage('en');
  const theme = await fetchTheme('en');
  return {
    props: {
      aboutUsPage,
      theme
    },
  }
}
