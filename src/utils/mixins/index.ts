import { css, FlattenSimpleInterpolation } from 'styled-components';
import { colors } from '../variables';

const breakpoints: any = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
};

export const lessThen = Object.keys(breakpoints).reduce(
  (a: Record<string, unknown>, l: string) => {
    a[l] = (...args: any) => css`
      @media (max-width: ${breakpoints[l]}) {
        ${css(args)};
      }
    `;
    return a;
  },
  {},
);

export const moreThen = Object.keys(breakpoints).reduce(
  (a: Record<string, unknown>, l: string) => {
    a[l] = (...args: any) => css`
      @media (min-width: ${breakpoints[l]}) {
        ${css(args)};
      }
    `;
    return a;
  },
  {},
);

export const buttonReset = (): FlattenSimpleInterpolation => {
  return css`
    color: ${colors.white};
    border: none;
    cursor: pointer;
  `;
};
