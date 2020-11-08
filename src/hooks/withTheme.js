import { Component } from 'react';
import { connect, useSelector } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

let palette = {
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
    light: 'rgba(181, 48, 93, 1)',
    main: 'rgba(150, 64, 94, 1)',
    dark: 'rgba(148, 16, 75, 1)',
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

function createTheme(type = 'dark') {
  return createMuiTheme({
    palette: {
      ...palette,
      type,
    },
  });
}

function withTheme(WrappedComponent) {
  const ThemeWrapper = props => {
    const { type } = useSelector(state => state.Game.theme);
    const theme = createTheme(type);

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
