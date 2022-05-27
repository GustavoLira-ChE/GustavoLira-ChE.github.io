export const COLORS = {
    white: '0, 0%, 100%', //Background
    gray: '0deg 0% 62%', // text
    primary: '240deg 60% 63%', //blue
    secondary: '169deg 80% 40%', //green
    black: '0deg 0% 11%' // footer
  };
  
  export const WEIGHTS = {
    normal: 500,
    medium: 600,
    bold: 800,
  };
  
  export const BREAKPOINTS = {
    phone: 600,
    tablet: 950,
    laptop: 1300,
  };
  
  export const QUERIES = {
    phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
    tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
    laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
  };
  