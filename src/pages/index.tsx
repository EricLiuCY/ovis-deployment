import { GetServerSideProps } from 'next'
import { Inter } from 'next/font/google'
import styled from 'styled-components'
import { Homepage } from '../../types'
import About from '../components/Home/About'
import Hero from '../components/Home/Hero'
import Jacklin from '../components/Home/Jacklin'
import fetchHomePage from '../GROQ/quries/fetchHomepage'

export interface HomepageProps {
  data: Homepage
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

export default function Home({ data }: HomepageProps) {
  return (
    <Root>
      {/* Background */}
      <Video autoPlay loop muted>
        <source src={'/background.mp4'} />
      </Video>

      {/* Page Structure */}
      <Hero valueProp={data.valueProp}/>
      <About coreValues={data.coreValues} missionStatement={data.missionStatement}/>
      <Jacklin />
    </Root>
  )
}

export const getServerSideProps : GetServerSideProps<HomepageProps> = async () => {
  const data = await fetchHomePage('en');
  console.log(data.featureProject.projectImages)
  return {
    props: {
      data: data
    },
  }
}
