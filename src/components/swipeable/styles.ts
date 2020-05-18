import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export interface Style {
  leftAction: ViewStyle;
  actionText: TextStyle;
  rightAction: ViewStyle;
  rectButton: ViewStyle;
  separator: ViewStyle;
  fromText: TextStyle;
  messageText: TextStyle;
  dateText: TextStyle;
  rowContent: ViewStyle;
  rowIcon: ViewStyle;
  rowTitle: TextStyle;
  rowSubtitle: TextStyle;
}

const styles = StyleSheet.create<Style>({
  leftAction: {
    width: 84,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  rectButton: {
    flex: 1,
    height: 80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'yellow',
  },
  separator: {
    backgroundColor: 'rgb(200, 199, 204)',
  },
  fromText: {
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  messageText: {
    color: '#999',
    backgroundColor: 'transparent',
  },
  dateText: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 20,
    top: 10,
    color: '#999',
    fontWeight: 'bold',
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
    height: 75,
    backgroundColor: 'white',
  },
  rowIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#b5d9f8',
    margin: 20,
  },
  rowTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  rowSubtitle: {
    fontSize: 18,
    color: Colors.gray,
  },
});

export default styles;
