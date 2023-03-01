import { createRef, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import ArrowRight from '@/assets/About/ArrowRight';
import vw from '@/styles/vw';
import { PortableText } from '@portabletext/react';

interface ContentBoxProps {
    content: { name: string, value: any}[],
    right: boolean;
}

const Root = styled.div<ContentBoxProps>`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    ${vw([
        ['width', 880, '100%', '100%'],
        // ['padding-right', 120, 0, 0],
    ])}
    ${props => props.right ?
        css`
            ${vw([
                ['padding-right', 120, 0, 0],
            ])}
        `
        :
        css`
            ${vw([
                ['padding-left', 120, 0, 0],
            ])}
        `
    }
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
        ['padding-right', 5, 5, 5]
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

    &:disabled {
        opacity: 0.2;
    }
`

const ContentTitle = styled.p`
    justify-content: center;
`

const NextButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;

    &:disabled {
        opacity: 0.2;
    }
`
const Arrow = styled(ArrowRight)`
    ${vw([
        ['width', 20, 20, 10],
        ['height', 20, 20, 10],
    ])}
`
export default function ContentBox(props : ContentBoxProps) {
    const contentList = props.content

    const [componentIdx, setComponentIdx] = useState(0);

    const nextComponent = () => {
        setComponentIdx(Math.abs(componentIdx + 1) % contentList.length);
    }
    const prevComponent = () => {
        setComponentIdx(Math.abs(componentIdx - 1) % contentList.length);
    }

    return (
        <Root {...props}>
            <ContentWrapper>
                {contentList.map((contentObj, idx) => {
                    return (
                        <UserContent active={idx === componentIdx} key={idx}>
                            <PortableText value={contentObj.value}/>
                        </UserContent>
                    )
                })}
            </ContentWrapper>
            <Controls>
                <LeftButton onClick={prevComponent} disabled={contentList.length <= 1}>
                    <Arrow />
                </LeftButton>
                <ContentTitle className='strapline'>{contentList[componentIdx].name}</ContentTitle>
                <NextButton onClick={nextComponent} disabled={contentList.length <= 1}>
                    <Arrow />
                </NextButton>
            </Controls>
        </Root>
    )
}

ContentBox.defaultProps = {
    right: true,
}