import axios from 'axios'
import { NextPageContext } from 'next'
import styled from 'styled-components'
import fetchHomePage from '../../GROQ/quries/fetchHomepage'

const StyledP = styled.p`
  color: red;
`

export default function Team(props: any) {
  return (
    <>
      <StyledP>{props.test}</StyledP>
      <StyledP>{props.test}</StyledP>
      <StyledP>{props.test}</StyledP>
    </>
  )
}

export const getServerSideProps = async (context: NextPageContext) => {
  const data = await fetchHomePage();
  console.log(data)
  return {
    props: {
      test: 'sadfsadfdsaf',
      data: data
    },
  }
}
