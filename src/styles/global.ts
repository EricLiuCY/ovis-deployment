import { createGlobalStyle } from 'styled-components';
import vw from './vw';
import theme from './theme';
import config from '../utils/config';

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
        overflow-x: hidden;
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
            ['font-size', 20, 16, 13],
        ])}
    }

    p {
        line-height: 1.35;
        ${vw([
            ['font-size', 16, 14, 12],
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

    .cta {
        cursor: pointer;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: underline;
        ${vw([
            ['font-size', 16, 14, 14],
        ])}
    }

    .caption {
        text-transform: uppercase;
        font-weight: 700;
        ${vw([
            ['font-size', 28, 24, 16],
        ])}
    }
    .subcaption {
        ${vw([
            ['font-size', 20, 18, 12],
        ])}
    }

    .parallax {
        @media screen and (max-width: ${`${config.mediaQuery.desktop}px`}) {
            transform: none !important;
        }
    }
`;

export default GlobalStyle;