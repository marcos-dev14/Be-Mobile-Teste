import 'react-native-gesture-handler';

import { StatusBar } from 'react-native';
import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_500Medium 
} from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components';

import theme from './src/styles/theme';

import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
