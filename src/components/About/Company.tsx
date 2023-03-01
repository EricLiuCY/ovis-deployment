import vw from '@/styles/vw';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import Button from '../Button';

import Logo from '@/assets/Logo';
import config from '../../utils/config';

export interface CompanyProps {
    
}

const StyledCompany = styled.section`
    width: 100%;
    /* height: 100vh; */
    position: relative;
    color: white;
    ${vw([
        ['padding-top', 90, 60, 40],
        ['padding-bottom', 90, 120, 80],

        ['padding-left', 120, 60, 20],
        ['padding-right', 120, 60, 20],
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

const Watermark = styled(Parallax)`
    ${vw([
        ['height', 300, 200, 100],
        ['width', 787.52, '100%', '100%'],
        ['bottom', 162, 'unset', 'unset'],
        ['left', -396.76, 'unset', 'unset'],
        ['position', 'absolute', 'unset', 'unset'],
        ['margin-bottom', 0, 60, 40],
        ['text-align', 'center', 'center', 'center'],
    ])}
    @media screen and (max-width: ${`${config.mediaQuery.desktop}px`}) {
        transform: none !important;
    }
`
const WatermarkImg = styled(Logo)`
    width: 100%;
    height: 100%;
    opacity: 0.2;
    ${vw([
        ['width', 787.52, 525.02, 262.51],
    ])}
`

const Title = styled.h2`
    ${vw([
        ['margin-bottom', 0, 90, 60],
    ])}
`

const MissionStatement = styled.div`
    ${vw([
        ['position', 'absolute', 'relative', 'relative'],
        ['width', 606, '100%', '100%'],
        ['right', 120, 'unset', 'unset'],
        ['bottom', 90, 'unset', 'unset']
    ])}
`;

const _p = styled.p`
    ${vw([
    ])} 
`

export default function Company() {
  return (
    <StyledCompany>
        <Overlay />
        <Title className="h2_large">
            Building<br />
            our purpose
        </Title>
        <Watermark translateX={[0, 65]} shouldAlwaysCompleteAnimation>
            <WatermarkImg />
        </Watermark>
        <MissionStatement>
            <_p>
                At OVIS Group, we are dedicated to creating sustainable homes that minimize our 
                environmental impact while providing comfortable and energy-efficient living spaces 
                for our residents. We believe that our commitment to sustainability not only benefits 
                the environment but also enhances the quality of life for our residents.
                <br />
                <br />
                Our focus on innovation allows us to stay ahead of the curve in terms of design 
                trends and technological advances. We are constantly exploring new ways to improve 
                the resident experience, from incorporating smart home technology and high-quality 
                materials.
                <br />
                <br />
                Above all, OVIS Group is committed to providing exceptional service to our residents. 
                We believe that a rental building is more than just a place to live - it&apos;s a 
                community, something you should be proud to call your home, and we work hard to 
                foster a sense of belonging and connection among our residents. From our concierge 
                service to our smart technology, we are dedicated to making our properties feel like 
                home.
            </_p>
            {/* <Button text={aboutSection.cta} /> */}
        </MissionStatement>
    </StyledCompany>
  )
}

