import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function FlatCards(): JSX.Element {
  return (
    <View>
      <Text style={styles.heading}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.whiteText}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.whiteText}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.whiteText}>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: '500',
    paddingHorizontal: 8,
  },
  card: {
    height: 100,
    width: 100,
    margin: 4,
    borderRadius: 7,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    // borderColor: '#000000',
    // borderWidth: 2,
  },
  cardOne: {
    backgroundColor: '#a83c32',
  },
  whiteText: {
    color: '#ffffff',
    fontSize: 17,
  },
  cardTwo: {
    backgroundColor: '#44a832',
  },
  cardThree: {
    backgroundColor: '#327ba8',
  },
});

export default FlatCards;
