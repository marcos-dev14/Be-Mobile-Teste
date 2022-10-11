import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS
} from 'react-native-reanimated';

import BeLogoSvg from '../../assets/belogo.svg';
import MobileLogoSvg from '../../assets/mobilelogo.svg';

import { Container } from "./styles";

export function Splash() {
  const navigation = useNavigation();

  const splashAnimation = useSharedValue(0);

  const beLogoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
            [0, 60],
            [0, -60],
            Extrapolate.CLAMP  
          )
        }
      ]
    }
  });

  const mobileLogoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value,
        [0, 25, 50],
        [0, .3, 1],
      ),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
            [0, 60],
            [-60, 0],
            Extrapolate.CLAMP  
          )
        }
      ]
    }
  });

  function startApp() {
    navigation.navigate('home')
  }

  useEffect(() => {
    splashAnimation.value = withTiming(
      50,
      { duration: 2000 },
      () => {
        'worklet'
        runOnJS(startApp)();
      }
    );
  },[]);
  return (
    <Container>
      <Animated.View style={[beLogoStyle, {position: 'absolute'}]}>
        <BeLogoSvg width={80} height={60} />
      </Animated.View>

      <Animated.View style={[mobileLogoStyle, {position: 'absolute'}]}>
        <MobileLogoSvg width={80} height={60} />
      </Animated.View>
    </Container>
  );
}