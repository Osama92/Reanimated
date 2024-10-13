// import React from 'react';
// import { StyleSheet } from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   useAnimatedGestureHandler,
// } from 'react-native-reanimated';
// import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';

// export default function Index() {
//   const translateX = useSharedValue(0);
//   const translateY = useSharedValue(0);

//   // Define context type
//   type ContextType = {
//     startX: number;
//     startY: number;
//   };

//   const gestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
//     onStart: (event, context) => {
//       context.startX = translateX.value;
//       context.startY = translateY.value;
//     },
//     onActive: (event, context) => {
//       translateX.value = context.startX + event.translationX;
//       translateY.value = context.startY + event.translationY;
//     },
//     onEnd: () => {
//       // Optional: Add easing or snap-back animation on end
//     },
//   });

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
//     };
//   });

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <PanGestureHandler onGestureEvent={gestureHandler}>
//         <Animated.View style={[styles.box, animatedStyle]} />
//       </PanGestureHandler>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'green',
//   },
// });

import { Button, View } from 'react-native';
import Animated, {ReduceMotion, useSharedValue, withSpring, withTiming} from 'react-native-reanimated';

export default function Index() {

  


  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withTiming(width.value + 50);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    <Animated.View
      style={{
        width,
        height: 100,
        backgroundColor: 'tomato',
        borderRadius: 10
      }}
    />
    <Button onPress={handlePress} title="Click to see me move" />
    </View>
  );
}