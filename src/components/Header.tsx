import styled, { css } from 'styled-components'
import Link from 'next/link';
import vw from '@/styles/vw';
import Logo from '@/assets/Logo'
import MenuBurger from '@/assets/Header/menu-burger';
import MenuClose from '@/assets/Header/close-x';
import { useScrollData } from '@/hooks/useScrollData';
import { useState } from 'react';
import axios from 'axios';

interface HeaderProps {
    scrolledPast: boolean;
    isScrollingDown: boolean;
    menuOpen: boolean;
}

const StyledHeader = styled.header<HeaderProps>`
    width: 100%;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
    background: transparent;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    z-index: 10;
    transform: translateY(${(props) => props.isScrollingDown ? '-100%' : '0'});
    background-color: ${(props) => props.scrolledPast ?
        '#393939'
        : 'transparent'
    };
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    opacity: ${(props) => props.isScrollingDown ? 0 : 1};
    transition: transform 0.5s ease, height 0.5s ease, background-color 0.5s ease, opacity 0.5s ease;
    

    ${(props) => vw([
        // ['padding-left', 120, 60, 20],
        // ['padding-right', 170 + 20, 100 + 20, 50 + 10],
        ['height',
            // props.scrolledPast ? 90 : 195,
            // props.scrolledPast ? 80 : 140,
            // props.scrolledPast ? 70 : 130
            100, 75, 50
        ]
    ])}
`

const StyledLogo = styled(Logo)`
    width: auto;
    transition: height 0.5s ease;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${(props) => vw([
        ['height',
            // props.scrolledPast ? 50 : 75,
            // props.scrolledPast ? 40 : 60,
            // props.scrolledPast ? 30 : 50
            60, 50, 30
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

const MenuButton = styled.button`
    outline: none;
    border: none;
    background: none;
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    ${vw([
        ['height', 50, 40, 20],
        ['width', 50, 40, 20],
        ['right', 120, 60, 20]
    ])}
`

type MenuProps = {
    menuOpen: boolean;
}

const StyledBurger = styled(MenuBurger)<MenuProps>`
    opacity: ${(props) => props.menuOpen ? '0' : '1'};
    pointer-events: ${(props) => props.menuOpen ? 'none' : 'auto'};
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const StyledClose = styled(MenuClose)<MenuProps>`
    opacity: ${(props) => props.menuOpen ? '1' : '0'};
    pointer-events: ${(props) => props.menuOpen ? 'auto' : 'none'};
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`


const Menu = styled.div<MenuProps>`
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    background-color: ${(props) => props.menuOpen ? '#393939' : 'transparent'};
    pointer-events: ${(props) => props.menuOpen ? 'auto' : 'none'};
    transition: background-color 0.5s ease, opacity 0.5s ease;
    opacity: ${(props) => props.menuOpen ? '1' : '0'};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    ${vw([
        ['flex-direction', 'column', 'column', 'column'],
        ['padding-left', 120, 60, 20],
        ['padding-right', 120, 60, 20],
        ['padding-top', 140, 100, 60],
        ['padding-bottom', 40, 20, 20],
        ['height', 'auto', 'auto', 'auto'],
        ['gap', 10, 10, 5],
    ])}

    a {
        text-decoration: none;
        color: white;
        letter-spacing: 0em;
        font-weight: 500
    }
    /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
`

export default function Header() {
    const scrollData = useScrollData({
        scrolledPast: 100,
        scrollingDown: 100
    })
    const [menuOpen, setMenuOpen] = useState(false)
    const openClose = () => setMenuOpen(!menuOpen);

    const setLocale = async (locale: string) => {
        await axios.post(`${window.location.origin}/api/locale`, { locale });
    }

    return (
        <StyledHeader
            scrolledPast={scrollData.hasScrolledPast}
            isScrollingDown={scrollData.isScrollingDown}
            menuOpen={menuOpen}
        >
            <Link href="/">
                <StyledLogo
                />
            </Link>
            {/* <Locales>
                <LocaleButton className="strapline" onClick={() => setLocale('en')}>EN</LocaleButton>
                <LocaleButton className="strapline" onClick={() => setLocale('fr')}>FR</LocaleButton>
                <LocaleButton className="strapline" onClick={() => setLocale('zhs')}>中文</LocaleButton>
            </Locales> */}
            
            <MenuButton onClick={openClose}>
                <StyledBurger menuOpen={menuOpen} />
                <StyledClose menuOpen={menuOpen} />
            </MenuButton>
            <Menu menuOpen={menuOpen}>
                <Link onClick={openClose} href="/" className="strapline">
                    Home
                </Link>
                <Link onClick={openClose} href="/about" className="strapline">
                    About Us
                </Link>
                <Link onClick={openClose} href="/jacklin" className="strapline">
                    Jacklin
                </Link>
                {/* <Link onClick={openClose} href="/contact" className="strapline">
                    Contact Us
                </Link> */}
            </Menu>
        </StyledHeader>
    )
}

