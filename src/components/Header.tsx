import { Inter } from 'next/font/google'
import styled from 'styled-components'
import vw from '@/styles/vw';
import { ReactComponent as Logo } from '@/assets/logo.svg'

const inter = Inter({ subsets: ['latin'] })

const StyledHeader = styled.header`
    width: 100%;
    object-fit: cover;
    /* height: 100vh; */
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

// const StyledLogo = styled(Logo)`
//     ${vw([
//         ['width', 197, 197, 131],
//         ['height', 75, 75, 50]
//     ])}
// `

export default function Header() {
  return (
    <StyledHeader>
        <Logo />
    </StyledHeader>
  )
}

