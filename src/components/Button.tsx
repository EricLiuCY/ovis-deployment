import styled from 'styled-components';
import vw from '@/styles/vw';

const StyledButton = styled.button`
    background: linear-gradient(90deg, #EDC978 0%, rgba(237, 201, 120, 0) 100%);
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    color: white;
    position: relative;
    cursor: pointer;
    ${vw([
        ['width', 300, 324, '100%'],
        ['height', 80, 60, 40],
        ['padding-left', 50, 30, 0],
        ['justify-content', 'flex-start', 'flex-start', 'center']
    ])}

    &:hover {
        .effect {
            width: 100%;
        }
    }
`

const Effect = styled.div`
    position: absolute;
    transform: rotate(180deg);
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: #EDC978;
    filter: brightness(50%);

    transition: width 0.5s ease;
`

interface ButtonProps {
    onClick?: () => void;
    text: string;
}

export default function Button(props: ButtonProps) {
    
    return (
        <StyledButton onClick={props.onClick}>
            <span className='button'>{props.text}</span>
            <Effect className="effect" />
        </StyledButton>
    )
}