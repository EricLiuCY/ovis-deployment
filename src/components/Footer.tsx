import styled, { css } from 'styled-components'
import Link from 'next/link';
import vw from '@/styles/vw';
import Logo from '@/assets/Logo'
import MenuBurger from '@/assets/Header/menu-burger';
import MenuClose from '@/assets/Header/close-x';
import { useScrollData } from '@/hooks/useScrollData';
import { useState } from 'react';

const StyledLogo = styled(Logo)`
    width: auto;
    transition: height 0.5s ease;
    position: absolute;
    left: 10%;
    transform: translate(-50%, -50%);
    ${(props) => vw([
        ['height',
            // props.scrolledPast ? 50 : 75,
            // props.scrolledPast ? 40 : 60,
            // props.scrolledPast ? 30 : 50
            30, 18, 12
        ],
    ])}
`

const StyledFooter = styled.div`
    width: 100%;
    object-fit: cover;
    bottom: 0;
    left: 0;
    background: #393939;
    display: flex;
    align-items: center;
    ${vw([
        ['flex-direction', 'row', 'row', 'row'],
        ['padding-left', 120, 50, 30],
        ['padding-right', 120, 50, 30],
        ['padding-top', 30, 20, 15],
        ['padding-bottom', 30, 20, 15],
        ['height', 'auto', 'auto', 'auto'],
        ['gap', 10, 10, 5],
    ])}
`

const IDontKnowWhatThisIs = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 10%;
    ${vw([
        ['gap', 10, 10, 5],
    ])}
`

const Reserved = styled.p`
    letter-spacing: 0.05em;
    color: white;
    font-weight: 400;
    ${vw([
        ['font-size', 15, 12, 8]
    ])}
`

export default function Footer() {
    return (
        <StyledFooter>
            <Link href="/">
                <StyledLogo
                />
            </Link>
            <IDontKnowWhatThisIs>
                <Reserved className="strapline">&copy; All rights reserved 2023</Reserved>
            </IDontKnowWhatThisIs>
        </StyledFooter>
    )
}

