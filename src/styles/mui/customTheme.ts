import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#01c38'
    }
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '700px'
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '14px'
        },
        root: {
          marginBottom: '5px'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '12px',
          fontSize: '14px'
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: '8px'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '14px'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '14px'
        }
      }
    }
  }
});

export default theme;
