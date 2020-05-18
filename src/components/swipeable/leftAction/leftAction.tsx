import {Animated, ViewStyle} from 'react-native';
import React, {memo, ReactElement} from 'react';
import {RectButton} from 'react-native-gesture-handler';

interface Props {
  dragX: Animated.AnimatedInterpolation;
  onPress: () => void;
  containerStyle: ViewStyle;
  children: ReactElement;
}
const defaultProps: Props = {
  dragX: {} as Animated.AnimatedInterpolation,
  onPress: () => {},
  containerStyle: {},
  children: <></>,
};

const LeftActionsComponent = ({
  dragX,
  onPress,
  containerStyle,
  children,
}: Props): ReactElement => {
  const trans = dragX.interpolate({
    inputRange: [0, 50, 100, 101],
    outputRange: [-20, 0, 0, 1],
  });
  return (
    <RectButton style={containerStyle} onPress={onPress}>
      <Animated.View
        style={[
          containerStyle,
          {
            transform: [{translateX: trans}],
          },
        ]}>
        {children}
      </Animated.View>
    </RectButton>
  );
};

LeftActionsComponent.defaultProps = defaultProps;
const LeftActions = memo(LeftActionsComponent);

export default LeftActions;
