import { Component } from 'react';
import { connect, useSelector } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

let palette = {
  primary: {
    main: '#8c2020',
  },
  secondary: {
    main: '#f3d8d8',
  },
};

function createTheme(type, primary) {
  if (type && primary) {
    palette = {
      type: type,
      primary: primary,
      secondary: { main: '#ef9a9a' },
    };
  }

  return createMuiTheme({
    palette,
    status: {
      danger: 'orange',
    },
    MuiAppBar: {
      flexDirection: 'row',
    },
  });
}

function withTheme(WrappedComponent) {
  const ThemeWrapper = props => {
    const { type, primary } = useSelector(state => state.Game.theme);
    const theme = createTheme(type, primary);

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
