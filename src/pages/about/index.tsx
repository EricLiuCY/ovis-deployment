import { PortableText } from '@portabletext/react'
import { getFileAsset } from '@sanity/asset-utils'
import { GetServerSideProps } from 'next'
import styled from 'styled-components'
import { AboutUsPage, Theme } from '../../../types'
import fetchAboutUsPage from '../../GROQ/quries/fetchAboutUsPage'
import fetchTheme from '../../GROQ/quries/fetchTheme'
import client from '../../utils/sanity/client'


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
const components = {
  block: {
    // Ex. 1: customizing common block types
    h2: ({children} : any) => <Test>{children}</Test>,
    p: ({children} : any) => <p>{children}</p>,
  },
}

// function PartnerOverview({ partnerOverview }: PartnerOverviewProps) {
//   // @ts-ignore
//   const imageProps = useNextSanityImage(sanityClient, partnerOverview.profilePicture)
//   return (
//       <div>
//           {/*// @ts-ignore */}
//           <Image {...imageProps} loader={withAssetFileName} height={100} width={50} alt={'asd'}/>
//           <h2>{partnerOverview.founderName}</h2>
//           <h2>{partnerOverview.founderTitle}</h2>
//           <h2>{partnerOverview.founderSummary}</h2>
//       </div>
//   )
// }

export default function AboutUs({ aboutUsPage, theme }: AboutUsPageProps) {
  const videoAssetFor = (source: any) => source && getFileAsset(source, client.config())
  const backgroundVideo = videoAssetFor(theme.backgroundVideo)
  return (
    <>
      <Test><PortableText value={aboutUsPage.partnerDetails[0].founderDescription} components={components}/></Test>
    </>
  )
}

export const getServerSideProps : GetServerSideProps<AboutUsPageProps> = async () => {
  const aboutUsPage = await fetchAboutUsPage('en');
  console.log(aboutUsPage.partnerDetails[0].founderDescription);
  const theme = await fetchTheme('en');
  return {
    props: {
      aboutUsPage,
      theme
    },
  }
}
