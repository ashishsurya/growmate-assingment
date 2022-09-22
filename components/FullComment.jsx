import { View, Text, Image, StyleSheet } from 'react-native';
import { AntDesign as LikeIcon } from '@expo/vector-icons';
import React from 'react';
import { AntDesign as DisLikeIcon } from '@expo/vector-icons';

export default function FullComment({ image, name, time, replies, content }) {
  return (
    <View style={styles.comentContainer}>
      <View>
        <Image
          source={{ uri: image }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            borderColor: '#E84BC8',
            borderWidth: 2,
            padding: 2,
            marginRight: 10,
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.aboutData}>
          <Text style={{ marginRight: 5, fontWeight: '800' }}>{name}</Text>
          <Text style={{ marginRight: 5, fontWeight: '800' }}>&middot;</Text>
          <Text style={{ marginRight: 5, fontWeight: '800' }}>{time}</Text>
        </View>
        <Text style={styles.content}>{content}</Text>
        <View style={styles.actionButtons}>
          <LikeIcon
            name='like2'
            size={15}
            color='#606060'
            style={styles.iconBtn}
          />
          <DisLikeIcon
            name='dislike2'
            size={15}
            color='#606060'
            style={styles.iconBtn}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  comentContainer: {
    flexDirection: 'row',
    marginBottom:5
  },
  aboutData: {
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
  },
  content: {
    fontSize: 12,
    color: '#606060',
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop:5
  },
  iconBtn: {
    marginRight: 10,
  },
});
