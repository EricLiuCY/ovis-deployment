import styled from 'styled-components'
import vw from '@/styles/vw';
import Button from '../Button';

const StyledJacklin = styled.section`
    width: 100%;
    position: relative;
    color: white;

    ${vw([
        ['padding-top', 90, 60, 40],
        ['padding-bottom', 90, 120, 80],
        ['padding-left', 120, 60, 20],
        ['padding-right', 120, 60, 20],
        ['min-height', 900, 0, 0],
    ])}
`

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    top: 0;
    left: 0;
`


export default function Jacklin() {
  return (
    <StyledJacklin>
        <Overlay />
        
    </StyledJacklin>
  )
}

