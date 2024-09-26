import {extendTheme} from 'native-base';
import {DefaultTheme} from '@react-navigation/native';

const theme = extendTheme({
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
  components: {
    Box: {
      baseStyle: {
        bg: '#FFFFFF',
      },
    },
  },
});

export default theme;
