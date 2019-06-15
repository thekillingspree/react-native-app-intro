import React from 'react'
import {
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';

export const DoneButton = ({
  styles, onDoneBtnClick, onNextBtnClick,
  rightTextColor, isDoneBtnShow,
  skipFadeOpacity,
  doneFadeOpacity, nextOpacity,
  doneBtnLabel, nextBtnLabel,
}) => {
  const transform = [{
    translateX: skipFadeOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 20],
    }),
  }]
  return (
    <Animated.View style={[styles.btnContainer, { height: 0, paddingBottom:  0, }, {
      opacity: doneFadeOpacity, transform }]}>
      <TouchableOpacity style={styles.full}
        onPress={ onDoneBtnClick}
      >
       <Text style={[styles.controllText, { color: rightTextColor, paddingRight: 30 }]}>
         {doneBtnLabel}
       </Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default DoneButton