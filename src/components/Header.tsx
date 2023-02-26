import { Inter } from 'next/font/google'
import styled from 'styled-components'
import vw from '@/styles/vw';
import Logo from '@/assets/logo.svg'

const StyledHeader = styled.header`
    width: 100%;
    object-fit: cover;
    /* height: 100vh; */
    position: fixed;
    top: 0;
    left: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`

// const StyledLogo = styled(Logo)`
//     ${vw([
//         ['width', 197, 197, 131],
//         ['height', 75, 75, 50]
//     ])}
// `

export default function Header() {
    console.log(Logo);
  return (
    <StyledHeader>
        {/* <Logo /> */}
        Header
    </StyledHeader>
  )
}

