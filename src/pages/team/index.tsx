import axios from 'axios'
import { NextPageContext } from 'next'
import styled from 'styled-components'
import { Homepage } from '../../../types'
import fetchHomePage from '../../GROQ/quries/fetchHomepage'
import { useNextSanityImage } from 'next-sanity-image'
import sanityClient from '../../utils/sanity/client'
import Image from 'next/image'
import { withAssetFileName } from "@utils/Sanity/images"

const StyledP = styled.p`
  color: red;
`

export default function Team(props: { data: Homepage}) {
  //@ts-ignore
  const imageProps = useNextSanityImage(sanityClient, props.data.jacklinHouseImage)
  return (
    <>
      <StyledP>{props.data.valueProp}</StyledP>
      <StyledP>{props.data.valueProp}</StyledP>
      <StyledP>{props.data.valueProp}</StyledP>
      <StyledP>{props.data.coreValues[0].name}</StyledP>
      {/* <Image {...imageProps} loader={withAssetFileName} layout='responsive'/> */}
    </>
  )
}

export const getServerSideProps = async (context: NextPageContext) => {
  const data = await fetchHomePage('en');
  console.log(data)
  return {
    props: {
      data: data
    },
  }
}
