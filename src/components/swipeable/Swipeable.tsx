import React, {forwardRef, memo, ReactElement, useLayoutEffect} from 'react';
import {Animated, Text, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {IActionButtons} from '../../utils/models';
import styles from './styles';
import LeftActions from './leftAction/leftAction';
import RightActions from './rightAction/rightAction';
import {getLayoutWidth, useCombinedRefs} from '../../utils/functions';

interface Props {
  friction: number;
  overshootFriction: number;
  leftThreshold: number;
  rightThreshold: number;
  swipeElement: ReactElement | null;
  leftButtons: IActionButtons[];
  rightButtons: IActionButtons[];
}
const defaultProps: Props = {
  friction: 2,
  overshootFriction: 9,
  leftThreshold: 50,
  rightThreshold: 50,
  swipeElement: null,
  leftButtons: [],
  rightButtons: [],
};

const maxLengthArray: number = 3;

const SwipeableRowComponent = forwardRef(
  (
    {
      friction,
      overshootFriction,
      leftThreshold,
      rightThreshold,
      swipeElement,
      leftButtons,
      rightButtons,
    }: Props,
    ref,
  ): ReactElement => {
    const swipeRef = React.useRef(null);
    const combinedRef = useCombinedRefs(ref, swipeRef);

    const actionLeftButtons =
      leftButtons.length > maxLengthArray
        ? leftButtons.splice(0, maxLengthArray)
        : leftButtons;
    const actionRightButtons =
      rightButtons.length > maxLengthArray
        ? rightButtons.splice(0, maxLengthArray)
        : rightButtons;

    const renderLeftActions = (
      _progress: Animated.AnimatedInterpolation,
      dragX: Animated.AnimatedInterpolation,
    ): ReactElement => (
      <View
        style={{
          width: getLayoutWidth(actionLeftButtons),
          flexDirection: 'row',
        }}>
        {actionLeftButtons.map((el, index) => (
          <LeftActions
            key={`${index}`}
            dragX={dragX}
            onPress={el.onPress}
            containerStyle={el.containerStyle}
            children={el.children}
          />
        ))}
      </View>
    );

    const renderRightActions = (
      progress: Animated.AnimatedInterpolation,
      _dragX: Animated.AnimatedInterpolation,
    ): ReactElement => (
      <View
        style={{
          width: getLayoutWidth(actionRightButtons),
          flexDirection: 'row',
        }}>
        {actionRightButtons.map((el, index) => (
          <RightActions
            key={`${index}`}
            progress={progress}
            // @ts-ignore
            buttonWidth={+el.containerStyle?.width}
            onPress={el.onPress}
            containerStyle={el.containerStyle}
            children={el.children}
          />
        ))}
      </View>
    );

    return (
      <Swipeable
        // @ts-ignore
        ref={combinedRef}
        friction={friction}
        overshootFriction={overshootFriction}
        leftThreshold={leftThreshold}
        rightThreshold={rightThreshold}
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightActions}>
        {swipeElement ? (
          swipeElement
        ) : (
          <View style={styles.rowContent}>
            <View style={styles.rowIcon} />
            <View>
              <Text style={styles.rowTitle}>Row Title</Text>
              <Text style={styles.rowSubtitle}>
                Drag the row left and right
              </Text>
            </View>
          </View>
        )}
      </Swipeable>
    );
  },
);
SwipeableRowComponent.defaultProps = defaultProps;
const SwipeableRow = memo(SwipeableRowComponent);

export default SwipeableRow;
