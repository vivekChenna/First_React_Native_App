import React from 'react';

import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={styles.blackText}>Hello world!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blackText: {
    color: '#000000',
    fontSize: 30,
  },
  whiteText: {
    color: '#ffffff',
  },
});
export default AppPro;
