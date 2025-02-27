import { createTheme } from '@mui/material'
import { blue } from '@mui/material/colors'

/**
 * Create a custom MUI theme.
 */
export const muiTheme = createTheme({
  palette: {
    primary: {
      main: blue[300]
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
