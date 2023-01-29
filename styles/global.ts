import { extendTheme } from '@chakra-ui/react';
import { Lexend_Deca } from '@next/font/google';

// This is the global theme for the entire app.
const lexenddeca = Lexend_Deca({ weight: 'variable', preload: true, subsets: ['latin'] });

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px'
};

export const global_theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'accent_white',
        backgroundColor: '#181a1b'
      }
    }
  },
  colors: {
    accent_white: '#faf5ef',
    accent_yellow: '#e2ac02',
    accent_purple: '#e79fc4'
  },
  fonts: {
    body: lexenddeca.style.fontFamily,
    heading: lexenddeca.style.fontFamily
  },
  breakpoints
});
