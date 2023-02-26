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

    .h2_large {
        line-height: 1.2;
        letter-spacing: -0.05em;
        font-weight: 400;
        text-transform: uppercase;
        ${vw([
            ['font-size', 64, 48, 28],
        ])}
    }

    h1 {
        line-height: 1.2;
        font-weight: 400;
        ${vw([
            ['font-size', 48, 32, 32],
        ])}
    }

    h2 {
        line-height: 1.2;
        font-weight: 400;
        ${vw([
            ['font-size', 36, 24, 24],
        ])}
    }

    h3 {
        line-height: 1.2;
        font-weight: 400;
        ${vw([
            ['font-size', 28, 18, 18],
        ])}
    }

    .strapline {
        font-weight: 700;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        ${vw([
            ['font-size', 20, 16, 16],
        ])}
    }

    p {
        line-height: 1.35;
        ${vw([
            ['font-size', 16, 14, 14],
        ])}
    }

    .button {
        font-weight: 700;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        ${vw([
            ['font-size', 16, 14, 14],
        ])}
    }
`;

export default GlobalStyle;