/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Linking, TouchableOpacity} from 'react-native';

const ActionCard = () => {
  function OpenWebsite(url: string) {
    Linking.openURL(url);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Action Button</Text>
      <View style={styles.linkBox}>
        <TouchableOpacity
          onPress={() => OpenWebsite('https://www.twitter.com')}>
          <Text style={styles.linkText}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
  },
  linkText: {},
  linkBox: {
    borderBlockColor: '#000000',
    borderWidth: 3,
    width: 80,
    textAlign: 'center',
    padding: 4,
  },
});

export default ActionCard;
