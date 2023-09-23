import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
function ElevatedCards(): JSX.Element {
  return (
    <View>
      <Text style={styles.heading}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevated]}>
          <Text style={styles.whiteText}>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text style={styles.whiteText}>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text style={styles.whiteText}>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text style={styles.whiteText}>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text style={styles.whiteText}>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text style={styles.whiteText}>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text style={styles.whiteText}>Tap</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: 100,
    borderRadius: 5,
    backgroundColor: '#44a832',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  container: {
    padding: 8,
  },
  whiteText: {
    color: '#123456',
    fontSize: 20,
  },
  elevated: {
    elevation: 4,
  },
  heading: {
    fontSize: 24,
    fontWeight: '500',
  },
});

export default ElevatedCards;
