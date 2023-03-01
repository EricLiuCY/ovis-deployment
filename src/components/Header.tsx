import styled, { css } from 'styled-components'
import vw from '@/styles/vw';
import Logo from '@/assets/Logo'
import MenuBurger from '@/assets/Header/menu-burger';
import { useScrollData } from '@/hooks/useScrollData';
import { useState } from 'react';

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
    justify-content: flex-end;

    z-index: 10;
    transform: translateY(${(props) => props.isScrollingDown ? '-100%' : '0'});
    background-color: ${(props) => props.scrolledPast ?
        '#393939'
        : 'transparent'
    };
    transition: transform 0.5s ease, height 0.5s ease, background-color 0.5s ease;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    ${(props) => vw([
        ['padding-left', 120, 60, 20],
        ['padding-right', 170 + 20, 100 + 20, 50 + 10],
        ['height',
            props.scrolledPast ? 90 : 195,
            props.scrolledPast ? 80 : 140,
            props.scrolledPast ? 70 : 130
        ]
    ])}
`

const StyledLogo = styled(Logo)<HeaderProps>`
    width: auto;
    transition: height 0.5s ease;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${(props) => vw([
        ['height',
            props.scrolledPast ? 50 : 75,
            props.scrolledPast ? 40 : 60,
            props.scrolledPast ? 30 : 50
        ],
    ])}
`

const Locales = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${vw([
        ['gap', 20, 20, 20]
    ])}
`

const LocaleButton = styled.button`
    outline: none;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`

const StyledBurger = styled(MenuBurger)`
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    ${vw([
        ['height', 50, 40, 30],
        ['width', 50, 40, 30],
        ['right', 120, 60, 20]
    ])}
`

export default function Header() {
    const scrollData = useScrollData({
        scrolledPast: 100,
        scrollingDown: 100
    })
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <StyledHeader
            scrolledPast={scrollData.hasScrolledPast}
            isScrollingDown={scrollData.isScrollingDown}
        >
            <StyledLogo
                scrolledPast={scrollData.hasScrolledPast}
                isScrollingDown={scrollData.isScrollingDown}
            />
            <Locales>
                <LocaleButton className="strapline">EN</LocaleButton>
                <LocaleButton className="strapline">FR</LocaleButton>
                <LocaleButton className="strapline">中文</LocaleButton>
            </Locales>
            

            <StyledBurger />
        </StyledHeader>
    )
}

