import { getFileAsset } from '@sanity/asset-utils'
import { GetServerSideProps } from 'next'
import styled from 'styled-components'
import { Theme } from '../../../types'
import fetchTheme from '../../GROQ/quries/fetchTheme'
import client from '../../utils/sanity/client'


export interface AboutUsPageProps {
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

export default function AboutUsPage({ theme }: AboutUsPageProps) {
  const videoAssetFor = (source: any) => source && getFileAsset(source, client.config())
  const backgroundVideo = videoAssetFor(theme.backgroundVideo)
  return (
    <></>
  )
}

export const getServerSideProps : GetServerSideProps<AboutUsPageProps> = async () => {
  const theme = await fetchTheme('en');
  return {
    props: {
      theme
    },
  }
}
