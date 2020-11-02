import { css } from 'styled-components'

const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px'
};

export const lessThen = Object.keys(breakpoints).reduce(
  (a, l) => {
    a[l] = (...args) => css`
      @media (max-width: ${breakpoints[l]}) {
        ${css(...args)};
      }
    `;
    return a;
  },
  {}
);

export const moreThen = Object.keys(breakpoints).reduce(
  (a, l) => {
    a[l] = (...args) => css`
      @media (min-width: ${breakpoints[l]}) {
        ${css(...args)};
      }
    `;
    return a;
  },
  {}
);
