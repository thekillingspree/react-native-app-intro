import React from 'react'
import {
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';

export const DoneButton = ({
  styles, onNextBtnClick,
  rightTextColor, 
  skipFadeOpacity,
   nextOpacity,
   isDoneBtnShow,
   nextBtnLabel,
}) => {
  const transform = [{
    translateX: skipFadeOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 0],
    }),
  }]
  return (
    <Animated.View style={[styles.nextContainer, {
      opacity: nextOpacity, 
       }]}>
      <TouchableOpacity disabled={isDoneBtnShow} 
        onPress={ isDoneBtnShow ?  null : () => onNextBtnClick()}
      >

       <Text style={[styles.nextButtonText, { color: rightTextColor, }]}>
         { nextBtnLabel}
       </Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default DoneButton