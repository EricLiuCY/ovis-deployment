import styled, { css } from 'styled-components'
import vw from '@/styles/vw';
import Logo from '@/assets/Logo'
import { useScrollData } from '../hooks/useScrollData';

interface HeaderProps {
    scrolledPast: boolean;
    isScrollingDown: boolean;
}

const StyledHeader = styled.header<HeaderProps>`
    width: 100%;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    
    ${(props) => vw([
        ['padding-top',
            props.scrolledPast ? 20 : 60,
            props.scrolledPast ? 20 : 40,
            props.scrolledPast ? 20 : 40
        ],
        ['padding-bottom', 20, 20, 20]
    ])}

    transform: translateY(${(props) => props.isScrollingDown ? '-100%' : '0'});
    background-color: ${(props) => props.scrolledPast ? 'rgba(0, 0, 0, 1)' : 'transparent'};
    transition: transform 0.5s ease, padding-top 0.5s ease, background-color 0.5s ease;
`

const StyledLogo = styled(Logo)<HeaderProps>`
    width: auto;
    ${(props) => vw([
        ['height',
            props.scrolledPast ? 50 : 75,
            props.scrolledPast ? 40 : 60,
            props.scrolledPast ? 30 : 50
        ],
    ])}
    transition: height 0.5s ease;
`

export default function Header() {
    const scrollData = useScrollData({
        scrolledPast: 100,
        scrollingDown: 100
    })
    return (
        <StyledHeader
            scrolledPast={scrollData.hasScrolledPast}
            isScrollingDown={scrollData.isScrollingDown}
        >
            <StyledLogo
                scrolledPast={scrollData.hasScrolledPast}
                isScrollingDown={scrollData.isScrollingDown}
            />
        </StyledHeader>
    )
}

