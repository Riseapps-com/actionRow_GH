/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {ReactElement, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SwipeableRow from './src/components/swipeable/Swipeable';
import {IActionButtons} from './src/utils/models';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const swipeRef = useRef(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.scrollView}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollView}
          style={styles.scrollView}>
          <SwipeableRow
            ref={swipeRef}
            swipeElement={swipeElement}
            leftButtons={leftButtons}
            rightButtons={rightButtons}
            friction={friction}
            overshootFriction={overshootFriction}
            leftThreshold={leftThreshold}
            rightThreshold={rightThreshold}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  buttonsText: {
    fontSize: 16,
    color: Colors.white,
  },
});

const friction: number = 2;
const overshootFriction: number = 9;
const leftThreshold: number = 50;
const rightThreshold: number = 50;
const swipeElement: ReactElement | null = null;
const leftButtons: IActionButtons[] = [
  {
    containerStyle: {
      width: 75,
      height: 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#339FFF',
    },
    onPress: (): void => {
      Alert.alert(`Button pressed`);
    },
    children: <Text style={styles.buttonsText}>Left</Text>,
  },
];
const rightButtons: IActionButtons[] = [
  {
    containerStyle: {
      width: 75,
      height: 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#CACFD2',
    },
    onPress: (): void => {
      Alert.alert(`Button pressed`);
    },
    children: <Text style={styles.buttonsText}>Right 1</Text>,
  },
  {
    containerStyle: {
      width: 75,
      height: 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F1C40F',
    },
    onPress: (): void => {
      Alert.alert(`Button pressed`);
    },
    children: <Text style={styles.buttonsText}>Right 2</Text>,
  },
  {
    containerStyle: {
      width: 75,
      height: 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E74C3C',
    },
    onPress: (): void => {
      Alert.alert(`Button pressed`);
    },
    children: <Text style={styles.buttonsText}>Right 3</Text>,
  },
];

export default App;
