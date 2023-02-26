import config from '../utils/config';

type WidthValue = number | string
// Property Name, Desktop, Tablet, Mobile
type MQProperty = [string, WidthValue, WidthValue, WidthValue]

const mobile = 360;
const tablet = 768;
const desktop = 1760;

type Scale = (width: number) => string

const scale = (deviceVwSize: number) => (width: number): string => {
  return `${(width / deviceVwSize) * 100}vw`;
};

const scaleVwMobile = scale(mobile);
const scaleVwTablet = scale(tablet);
const scaleVwDesktop = scale(desktop);

const setProperty = (scaleVw: Scale) => (width: WidthValue) => (typeof width === 'string' ? width : scaleVw(width));

const scaleMobile = setProperty(scaleVwMobile);
const scaleTablet = setProperty(scaleVwTablet);
const scaleDesktop = setProperty(scaleVwDesktop);

function vw(properties: MQProperty[]) {
  const generateProperties = (scaleFn: Function, propertyIdx: number) => properties.map((prop) => `${prop[0]}: ${scaleFn(prop[propertyIdx])};`).join('');

  return (`
    ${generateProperties(scaleMobile, 3)}
    @media (min-width: ${config.mediaQuery.tablet}px) {
        ${generateProperties(scaleTablet, 2)}
    }
    @media (min-width: ${config.mediaQuery.desktop}px) {
      ${generateProperties(scaleDesktop, 1)}
    }
    `);
}

export const vwMobile = (width: WidthValue) => scaleMobile(width);
export const vwTablet = (width: WidthValue) => scaleTablet(width);
export const vwDesktop = (width: WidthValue) => scaleDesktop(width);

export default vw;
