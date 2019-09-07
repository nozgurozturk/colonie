// my-theme.ts
import { DefaultTheme } from 'styled-components'

const lightTheme: DefaultTheme = {
  borderRadius: '32px',

  colors: {
    primary: '#3771E5',
    secondary: '#FF5847',
    main: '#2B3039',
    background: '#F5F7FA',
    grey900: '#83878F',
    grey600: '#A9AEB8',
    grey300: '#E1E8F5',
  },
}

const darkTheme: DefaultTheme = {
  borderRadius: '32px',

  colors: {
    primary: '#3771E5',
    secondary: '#FF5847',
    main: '#FCFCFC',
    background: '#2B3039',
    grey900: '#E1E8F5',
    grey600: '#A9AEB8',
    grey300: '#83878F',
  },
}

export {lightTheme, darkTheme }