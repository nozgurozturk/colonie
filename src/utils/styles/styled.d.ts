// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      primary: string
      secondary: string
      main: string
      background: string
      grey900: string
      grey600: string
      grey300: string
    }
  }
}