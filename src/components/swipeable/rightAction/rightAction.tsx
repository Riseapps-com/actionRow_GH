import {Animated, LayoutChangeEvent, ViewStyle} from 'react-native';
import React, {memo, ReactElement} from 'react';
import {RectButton} from 'react-native-gesture-handler';

interface Props {
  progress: Animated.AnimatedInterpolation;
  buttonWidth: number;
  onPress: () => void;
  containerStyle: ViewStyle;
  children: ReactElement;
}
const defaultProps: Props = {
  progress: {} as Animated.AnimatedInterpolation,
  buttonWidth: 0,
  onPress: () => {},
  containerStyle: {},
  children: <></>,
};

const RightActionsComponent = ({
  progress,
  onPress,
  containerStyle,
  children,
  buttonWidth,
}: Props): ReactElement => {
  const trans = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [buttonWidth, 0],
  });
  return (
    <Animated.View style={{flex: 1, transform: [{translateX: trans}]}}>
      <RectButton style={containerStyle} onPress={onPress}>
        {children}
      </RectButton>
    </Animated.View>
  );
};

RightActionsComponent.defaultProps = defaultProps;
const RightActions = memo(RightActionsComponent);

export default RightActions;
