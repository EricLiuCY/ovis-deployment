import { createGlobalStyle } from 'styled-components';
import vw from './vw';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: ${theme.font.family};
    }

    html,
    body,
    #app {
        width: 100%;
        /* height: 100%; */
        min-height: 100%;
        height: auto;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-text-stroke: 0;
        padding: 0;
        margin: 0;
    }

    .h1_large {
        line-height: 1.2;
        letter-spacing: -5%;
        font-weight: 400;
        ${vw([
            ['font-size', 64, 48, 28],
        ])}
    }
`;

export default GlobalStyle;