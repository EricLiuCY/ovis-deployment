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
      <StyledP>{props.data.title}</StyledP>
      <StyledP>{props.data.subtitle}</StyledP>
      <StyledP>{props.data.body_1}</StyledP>
      <StyledP>{props.data.body_2}</StyledP>
    </>
  )
}

export const getServerSideProps = async (context: NextPageContext) => {
  const data = await fetchHomePage();
  console.log(data)
  return {
    props: {
      data: data
    },
  }
}
