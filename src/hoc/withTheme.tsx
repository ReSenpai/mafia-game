import React from 'react';
import { useSelector } from 'react-redux';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { StylesProvider, MuiThemeProvider } from '@material-ui/core';
import { AppStateType } from 'src/redux';

const palette: Record<string, unknown> = {
  common: {
    black: 'rgba(50, 50, 50, 1)',
    white: 'rgba(255, 255, 255, 1)',
  },
  background: {
    paper: 'rgba(37, 37, 37, 1)',
    default: 'rgba(48, 48, 48, 1)',
  },
  primary: {
    light: 'rgba(203, 121, 121, 1)',
    main: 'rgba(181, 63, 63, 1)',
    dark: 'rgba(159, 48, 48, 1)',
    contrastText: 'rgba(217, 217, 217, 1)',
  },
  secondary: {
    light: 'rgba(41, 188, 93, 1)',
    main: 'rgba(70, 134, 94, 1)',
    dark: 'rgba(16, 150, 75, 1)',
    contrastText: 'rgba(211, 211, 211, 1)',
  },
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f',
    contrastText: 'rgba(199, 199, 199, 1)',
  },
  text: {
    primary: 'rgba(180, 180, 180, 0.87)',
    secondary: 'rgba(189, 189, 189, 0.54)',
    disabled: 'rgba(167, 167, 167, 0.69)',
    hint: 'rgba(202, 202, 202, 0.38)',
  },
};

export enum EThemeType {
  dark = 'dark',
  light = 'light',
}

function createTheme(type: EThemeType = EThemeType.dark) {
  return createMuiTheme({
    palette: {
      ...palette,
      type,
    },
  });
}

function withTheme(WrappedComponent: React.FC) {
  const ThemeWrapper = (props: any) => {
    const { type } = useSelector((state: AppStateType) => state.Game.theme);
    const theme = createTheme(type as EThemeType);

    return (
      <StylesProvider injectFirst={true}>
        <MuiThemeProvider theme={theme}>
          <WrappedComponent {...props} />
        </MuiThemeProvider>
      </StylesProvider>
    );
  };
  return ThemeWrapper;
}

export default withTheme;
