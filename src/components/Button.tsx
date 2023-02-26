import styled from 'styled-components';
import vw from '@/styles/vw';

const StyledButton = styled.button`
    background: linear-gradient(90deg, #EDC978 0%, rgba(237, 201, 120, 0) 100%);
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    color: white;
    ${vw([
        ['width', 300, 324, '100%'],
        ['height', 80, 60, 60],
        ['padding-left', 50, 30, 0],
        ['justify-content', 'flex-start', 'flex-start', 'center']
    ])}
`

export default function Button() {
    return (
        <StyledButton>
            <span className='button'>About Us</span>
        </StyledButton>
    )
}