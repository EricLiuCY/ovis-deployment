import axios from 'axios'
import { NextPageContext } from 'next'
import styled from 'styled-components'
import { Homepage } from '../../../types'
import fetchHomePage from '../../GROQ/quries/fetchHomepage'

const StyledP = styled.p`
  color: red;
`

export default function Team(props: { data: Homepage}) {
  return (
    <>
      <StyledP>{props.data.valueProp}</StyledP>
      <StyledP>{props.data.valueProp}</StyledP>
      <StyledP>{props.data.valueProp}</StyledP>
      <StyledP>{props.data.coreValues[0].name}</StyledP>
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
