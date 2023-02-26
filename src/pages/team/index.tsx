import { NextPageContext } from 'next'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import styled from 'styled-components'
import { Homepage } from '../../../types'
import fetchHomePage from '../../GROQ/quries/fetchHomepage'
import { withAssetFileName } from '../../utils/sanity'
import sanityClient from '../../utils/sanity/client'

const StyledP = styled.p`
  color: red;
`

export default function Team(props: { data: Homepage}) {
  // @ts-ignore
  const imageProps : any = useNextSanityImage(sanityClient, props.data.jacklinHouseImage)
  return (
    <>
      <StyledP>{props.data.valueProp}</StyledP>
      <StyledP>{props.data.valueProp}</StyledP>
      <StyledP>{props.data.valueProp}</StyledP>
      <StyledP>{props.data.coreValues[0].name}</StyledP>\
      <Image {...imageProps} loader={withAssetFileName} layout='responsive' alt='123'/>
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
