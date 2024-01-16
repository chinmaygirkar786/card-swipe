import React, {useState} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';

import {CARDS, screenHeight, screenWidth} from '../../helpers/constants';

const Card = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      position.setValue({x: gestureState.dx, y: gestureState.dy});
    },
    onPanResponderRelease: (evt, gestureState) => {
      Animated.spring(position.x, {
        toValue: 0,
        friction: 10,
        useNativeDriver: true,
      }).start();
      Animated.spring(position.y, {
        toValue: 0,
        friction: 10,
        useNativeDriver: true,
      }).start();
      // if (gestureState.dx > 120) {
      //   Animated.spring(this.position, {
      //     toValue: {x: screenWidth + 100, y: gestureState.dy},
      //   }).start(() => {
      //     this.setState({currentIndex: this.state.currentIndex + 1}, () => {
      //       this.position.setValue({x: 0, y: 0});
      //     });
      //   });
      // } else if (gestureState.dx < -120) {
      //   Animated.spring(this.position, {
      //     toValue: {x: -screenWidth - 100, y: gestureState.dy},
      //   }).start(() => {
      //     this.setState({currentIndex: this.state.currentIndex + 1}, () => {
      //       this.position.setValue({x: 0, y: 0});
      //     });
      //   });
      // }
    },
  });
  const rotate = position.x.interpolate({
    inputRange: [-screenWidth / 2, 0, screenHeight / 2],
    outputRange: ['-15deg', '0deg', '15deg'],
    extrapolate: 'clamp',
  });
  const rotateAndTranslate = {
    transform: [{rotate}, ...position.getTranslateTransform()],
  };
  const nextCardOpacity = position.x.interpolate({
    inputRange: [-screenWidth / 2, 0, screenWidth / 2],
    outputRange: [1, 0, 1],
    extrapolate: 'clamp',
  });
  const nextCardScale = position.x.interpolate({
    inputRange: [-screenWidth / 2, 0, screenWidth / 2],
    outputRange: [1, 0.8, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.cardWrapper}>
      {CARDS.map((card, index) => {
        if (index < currentIndex) {
          return null;
        } else if (index === currentIndex) {
          return (
            <Animated.View
              {...panResponder.panHandlers}
              style={styles.animatedView({
                rotateAndTranslate,
              })}>
              <View style={styles.card({cardColor: card?.bgColor})} />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              {...panResponder.panHandlers}
              style={styles.animatedView({
                nextCardOpacity,
                nextCardScale,
              })}>
              <View style={styles.card({cardColor: card?.bgColor})} />
            </Animated.View>
          );
        }
      }).reverse()}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    marginTop: 50,
  },
  animatedView: ({rotateAndTranslate, nextCardOpacity, nextCardScale}) => ({
    padding: 10,
    width: screenWidth,
    position: 'absolute',
    opacity: nextCardOpacity,
    height: screenHeight - 120,
    transform: [{scale: nextCardScale}],
    ...(rotateAndTranslate ? {...rotateAndTranslate} : {}),
  }),
  card: ({cardColor}) => ({
    flex: 1,
    borderRadius: 10,
    backgroundColor: cardColor,
  }),
});
