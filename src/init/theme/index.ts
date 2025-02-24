import { createTheme } from '@mui/material'
import { green } from '@mui/material/colors'

/**
 * Create a custom MUI theme.
 */
export const muiTheme = createTheme({
  palette: {
    primary: {
      main: green[300]
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
})
