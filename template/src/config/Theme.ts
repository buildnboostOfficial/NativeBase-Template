import {extendTheme} from 'native-base';

const newTheme = {
  colors: {
    brand: {
      900: '#8287af',
      800: '#7c83db',
      700: '#b3bef6',
    },
  },
};

const Theme = extendTheme(newTheme);

export default Theme;
