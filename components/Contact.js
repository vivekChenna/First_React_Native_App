/* eslint-disable prettier/prettier */
import {View, StyleSheet, Text, Image} from 'react-native';
import React from 'react';

export default function Contact() {
  const Contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an Extra Ordinary Teacher',
      image: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I love to code and teach',
      image: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Building Gpay',
      image: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building Secure Digital Banks',
      image: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact List</Text>

      <View>
        {Contacts.map(item => {
          return (
            <View key={item.uid} style={styles.contactBox}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.image}
              />
              <View>
                <Text style={styles.UserName}>{item.name}</Text>
                <Text>{item.status}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  container: {
    margin: 8,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  contactBox: {
    // borderBlockColor: '#000',
    // borderWidth: 2,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 5,
  },
  UserName: {
    color: '#000000',
    fontFamily: 'lucida grande, tahoma, verdana, arial, sans-serif',
    fontWeight: '600',
    fontSize: 17,
  },
});
