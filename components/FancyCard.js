/* eslint-disable prettier/prettier */
import React from 'react';
import ImageTaj from '../assests/Taj_Mahal.jpg';
import {View, StyleSheet, Text, Image} from 'react-native';

function FancyCard(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending Places</Text>
      <View style={styles.card}>
        <Image
          style={styles.ImageCard}
          source={require('../assests/Taj_Mahal.jpg')}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardDescription}>
            comes under 7 wonders of the world
          </Text>
          <Text style={styles.cardLabel}>Located in UP</Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ImageCard: {
    height: 180,
    width: '100%',
    marginBottom: 10,
  },
  blackText: {
    color: '#000000',
  },
  heading: {
    fontSize: 24,
    fontWeight: '500',
  },
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: '#000000',
    padding: 8,
    borderRadius: 10,
  },
  cardBody: {},
  cardTitle: {
    color: '#ffffff',
    paddingBottom: 7,
    fontSize: 23,
    fontWeight: '500',
  },
  cardDescription: {
    color: '#ffffff',
    paddingBottom: 5,
  },
  cardLabel: {
    color: '#ffffff',
    paddingBottom: 8,
  },
  cardFooter: {
    color: '#ffffff',
    paddingBottom: 8,
  },
});

export default FancyCard;
