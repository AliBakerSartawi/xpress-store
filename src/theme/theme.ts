import { extendTheme } from '@chakra-ui/react';

export const maxHeaderWidth = '1580px';
export const maxBodyWidth = '1580px';
export const maxFooterWidth = '1240px';
export const minWidth = '300px';

export const theme = extendTheme({
  fonts: {
    heading: 'Muli, Mulish, Segoe UI, sans-serif',
    body: 'Muli, Mulish, Segoe UI, sans-serif'
  },
  colors: {
    xpressOrange: '#FF8236',
    xpressRuby: '#A8123E',
    xpressGrey: '#EEEEEE',
    xpressOrangeScheme: {
      50: '#ffeddd',
      100: '#ffeddd',
      200: '#ffceb0',
      300: '#ffb07f',
      400: '#ff904d',
      500: '#fe711c',
      600: '#e55802',
      700: '#b34300',
      800: '#813000',
      900: '#4f1c00'
    },
    xpressRubyScheme: {
      50: '#ffe5ef',
      100: '#fcb8cc',
      200: '#f48baa',
      300: '#ee5e88',
      400: '#e83266',
      500: '#ce194c',
      600: '#a1113b',
      700: '#740a2a',
      800: '#470319',
      900: '#1d0008'
    },
    xpressGreyScheme: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d'
    }
  }
});
