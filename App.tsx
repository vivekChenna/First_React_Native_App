import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import Contact from './components/Contact';

function App(): JSX.Element {
  return (
    <ScrollView>
      <Text>App</Text>
      <FlatCards />
      <ElevatedCards />
      <FancyCard />
      <ActionCard />
      <Contact />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  blackText: {
    color: '#000000',
  },
  whiteText: {
    color: '#ffffff',
  },
});
export default App;
