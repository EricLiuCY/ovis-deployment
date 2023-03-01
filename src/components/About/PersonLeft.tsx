import vw from '@/styles/vw';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import Button from '../Button';

import Logo from '@/assets/Logo';
import config from '../../utils/config';
import ContentBox from './ContentBox';

export interface CompanyProps {
    
}

const StyledPersonLeft = styled.section`
    width: 100%;
    position: relative;
    color: white;
    display: flex;
    justify-content: space-between;
    ${vw([
        ['padding-top', 90, 40, 30],
        ['padding-bottom', 90, 40, 30],
        ['flex-direction', 'row', 'column', 'column'],
        // ['justify-content', ]
        ['padding-left', 120, 60, 20],
        ['padding-right', 0, 60, 20],
        ['min-height', 900, 'unset', 'unset'],
        ['max-height', 1200, 'unset', 'unset'],
        ['height', '100vh', 'auto', 'auto']
    ])}
`

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    top: 0;
    left: 0;
`

const HeadshotContainer = styled.div`
  position: relative;
  ${vw([
    ['width', 600, '100%', '100%'],
    ['height', '100%', 350, 200],
  ])}
`;

// styled(Image)
const Headshot = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.75);
`

const Nameblock = styled.div`
    width: 100%;
    /* position: absolute;
    bottom: 0;
    left: 0; */
    background: linear-gradient(90deg, #EDC978 0%, rgba(237, 201, 120, 0) 100%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    ${vw([
        ['display', 'flex', 'none', 'none'],
        ['height', 80, 0, 0],
        ['padding-right', 120, 0, 0],
        ['width', 880, 0, 0],
        ['margin-bottom', 40, 0, 0]
    ])}
`

const MinNameblock = styled.div`
    width: 100%;
    background: linear-gradient(90deg, #EDC978 0%, rgba(237, 201, 120, 0) 100%);

    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    left: 0;
    bottom: 0;
    ${vw([
        ['display', 'none', 'flex', 'flex'],
        ['height', 0, 60, 40],
        ['padding-right', 0, 30, 20],
    ])}
`

const Name = styled.h2``
const Title = styled.h3``

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export default function PersonLeft() {
  return (
    <StyledPersonLeft>
        <Overlay />
        <HeadshotContainer>
          <Headshot
            src="https://cdn.sanity.io/images/byi6f4gi/production/4ac5ea9a116be6dcbe46c2c401e1705e9ad301de-438x425.jpg?q=75&fit=clip&auto=format&w=640"
          />
          <MinNameblock>
            <Name className="caption">Sebastien Loboeuf</Name>
            <Title className="subcaption">General Manager</Title>
          </MinNameblock>
        </HeadshotContainer>
        <Content>
          <Nameblock>
            <Name className="caption">Sebastien Loboeuf</Name>
            <Title className="subcaption">General Manager</Title>
          </Nameblock>
          <ContentBox />
        </Content>
        
    </StyledPersonLeft>
  )
}

