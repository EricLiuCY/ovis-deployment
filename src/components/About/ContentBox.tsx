import { createRef, useRef, useState } from 'react';
import styled from 'styled-components';
import ArrowRight from '@/assets/About/ArrowRight';
import vw from '@/styles/vw';

const CustomComponent1: React.FC = () => {
    return (
        <p>
            At OVIS Group, we are dedicated to creating sustainable homes that minimize our 
            environmental impact while providing comfortable and energy-efficient living spaces for 
            our residents. We believe that our commitment to sustainability not only benefits the 
            environment but also enhances the quality of life for our residents.
            <br />
            <br />
            Our focus on innovation allows us to stay ahead of the curve in terms of design trends 
            and technological advances. We are constantly exploring new ways to improve the resident 
            experience, from incorporating smart home technology and high-quality materials.
            <br /><br />
            Above all, OVIS Group is committed to providing exceptional service to our residents. We 
            believe that a rental building is more than just a place to live - it&apos;s a community, 
            something you should be proud to call your home, and we work hard to foster a sense of 
            belonging and connection among our residents. From our concierge service to our smart 
            technology, we are dedicated to making our properties feel like home.
            At OVIS Group, we are dedicated to creating sustainable homes that minimize our 
            environmental impact while providing comfortable and energy-efficient living spaces for 
            our residents. We believe that our commitment to sustainability not only benefits the 
            environment but also enhances the quality of life for our residents.
            <br />
            <br />
            Our focus on innovation allows us to stay ahead of the curve in terms of design trends 
            and technological advances. We are constantly exploring new ways to improve the resident 
            experience, from incorporating smart home technology and high-quality materials.
            <br /><br />
            Above all, OVIS Group is committed to providing exceptional service to our residents. We 
            believe that a rental building is more than just a place to live - it&apos;s a community, 
            something you should be proud to call your home, and we work hard to foster a sense of 
            belonging and connection among our residents. From our concierge service to our smart 
            technology, we are dedicated to making our properties feel like home.
            At OVIS Group, we are dedicated to creating sustainable homes that minimize our 
            environmental impact while providing comfortable and energy-efficient living spaces for 
            our residents. We believe that our commitment to sustainability not only benefits the 
            environment but also enhances the quality of life for our residents.
            <br />
            <br />
            Our focus on innovation allows us to stay ahead of the curve in terms of design trends 
            and technological advances. We are constantly exploring new ways to improve the resident 
            experience, from incorporating smart home technology and high-quality materials.
            <br /><br />
            Above all, OVIS Group is committed to providing exceptional service to our residents. We 
            believe that a rental building is more than just a place to live - it&apos;s a community, 
            something you should be proud to call your home, and we work hard to foster a sense of 
            belonging and connection among our residents. From our concierge service to our smart 
            technology, we are dedicated to making our properties feel like home.
            At OVIS Group, we are dedicated to creating sustainable homes that minimize our 
            environmental impact while providing comfortable and energy-efficient living spaces for 
            our residents. We believe that our commitment to sustainability not only benefits the 
            environment but also enhances the quality of life for our residents.
            <br />
            <br />
            Our focus on innovation allows us to stay ahead of the curve in terms of design trends 
            and technological advances. We are constantly exploring new ways to improve the resident 
            experience, from incorporating smart home technology and high-quality materials.
            <br /><br />
            Above all, OVIS Group is committed to providing exceptional service to our residents. We 
            believe that a rental building is more than just a place to live - it&apos;s a community, 
            something you should be proud to call your home, and we work hard to foster a sense of 
            belonging and connection among our residents. From our concierge service to our smart 
            technology, we are dedicated to making our properties feel like home.
        </p>
    )
}

const CustomComponent2: React.FC = () => {
    return (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut
        </p>
    )
}

const Root = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    ${vw([
        ['width', 880, '100%', '100%'],
        ['padding-right', 120, 0, 0],
    ])}
`

const ContentWrapper = styled.div`
    width: 100%;
    flex-grow: 1;
    position: relative;
    ${vw([
        ['margin-top', 0, 20, 20],
        ['margin-bottom', 40, 20, 20],
        ['height', '100%', 300, 300]
    ])}
`

interface UserContentProps {
    active: boolean;
}

const UserContent = styled.div<UserContentProps>`
    opacity: ${props => props.active ? 1 : 0};
    pointer-events: ${props => props.active ? 'auto' : 'none'};
    transition: opacity 0.5s;
    position: absolute;
    height: 100%;
    left: 0;
    overflow-y: auto;

    ${vw([
        ['width', 760, '100%', '100%'],
    ])}

    &::-webkit-scrollbar {
        ${vw([
            ['width', 10, 5, 5]
        ])}
    }
    &::-webkit-scrollbar-track {
        background-color: #393939; 
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #EDC978; 
    }
`;

const Controls = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const LeftButton = styled.button`
    transform: rotate(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
`

const ContentTitle = styled.p``

const NextButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
`
const Arrow = styled(ArrowRight)`
    ${vw([
        ['width', 20, 20, 10],
        ['height', 20, 20, 10],
    ])}
`

export default function ContentBox() {
    const componentList = [
        {
            name: 'Biography',
            component: CustomComponent1,
        },
        {
            name: 'Genevee',
            component: CustomComponent2,
        }
    ];

    const [componentIdx, setComponentIdx] = useState(0);

    const nextComponent = () => {
        setComponentIdx(Math.abs(componentIdx + 1) % componentList.length);
    }
    const prevComponent = () => {
        setComponentIdx(Math.abs(componentIdx - 1) % componentList.length);
    }

    return (
        <Root>
            <ContentWrapper>
                {componentList.map((component, idx) => {
                    return (
                        <UserContent active={idx === componentIdx} key={idx}>
                            <component.component />
                        </UserContent>
                    )
                })}
            </ContentWrapper>
            <Controls>
                <LeftButton onClick={prevComponent}>
                    <Arrow />
                </LeftButton>
                <ContentTitle className='strapline'>{componentList[componentIdx].name}</ContentTitle>
                <NextButton onClick={nextComponent}>
                    <Arrow />
                </NextButton>
            </Controls>
        </Root>
    )
}