import { NextPageContext } from 'next'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import styled from 'styled-components'
import { Homepage } from '@/../types'
import fetchHomePage from '@/GROQ/quries/fetchHomepage'
import { withAssetFileName } from '@/utils/sanity/index'
import sanityClient from '@/utils/sanity/client'

const StyledP = styled.p`
  color: red;
`

export default function Team(props: { data: Homepage}) {
  const images = props.data.featureProject.projectImages
  // @ts-ignore
  const imageProps = useNextSanityImage(sanityClient, images[0].image)
  return (
    <>
      <StyledP>{props.data.valueProp}</StyledP>
      <StyledP>{props.data.valueProp}</StyledP>
      <StyledP>{props.data.valueProp}</StyledP>
      <StyledP>{props.data.coreValues[0].name}</StyledP>
      {/*// @ts-ignore */}
      <Image {...imageProps} loader={withAssetFileName} layout='responsive' alt={imageProps.alt}/>
    </>
  )
}

export const getServerSideProps = async (context: NextPageContext) => {
  const data = await fetchHomePage('en');
  console.log(data.featureProject.projectImages)
  return {
    props: {
      data: data
    },
  }
}
