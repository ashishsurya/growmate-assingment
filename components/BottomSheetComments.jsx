import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import FullComment from './FullComment';

export default function BottomSheetComments() {
  return (
    <View>
      {/* top */}
      <View style={styles['top-bar']}>
        <Text style={styles['top-bar-title']}>Reactions</Text>
        <AntDesign name='closecircle' size={24} color='black' />
      </View>
      {/* chips */}
      <View style={styles['chips-container']}>
        <Chip label={'Top'} selected />
        <Chip label={'Newest'} />
      </View>
      {/* guidlines */}
      <View style={styles.guidlinesContainer}>
        <Text style={{ fontSize: 12 }}>
          Remember to keep comments respectful and to follow our{' '}
          <Text style={{ color: 'blue' }}>Community Guidelines</Text>
        </Text>
      </View>
      <View style={styles.commentsContainer}>
        <FullComment
          image='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
          content={
            "If China does indeed attack Taiwan soon , October is the likely time since the Taiwan Strait waters will be calm , facilitating amphibious operations . The drills around Taiwan allowed China to build up forces in Fujian , which is part of what's needed before an invasion ."
          }
          name='Prof.Alison'
          time='1 Sep'
        />
        <FullComment
          image='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
          content={
            "If China does indeed attack Taiwan soon , October is the likely time since the Taiwan Strait waters will be calm , facilitating amphibious operations . The drills around Taiwan allowed China to build up forces in Fujian , which is part of what's needed before an invasion ."
          }
          name='Prof.Alison'
          time='1 Sep'
        /><FullComment
        image='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
        content={
          "If China does indeed attack Taiwan soon , October is the likely time since the Taiwan Strait waters will be calm , facilitating amphibious operations . The drills around Taiwan allowed China to build up forces in Fujian , which is part of what's needed before an invasion ."
        }
        name='Prof.Alison'
        time='1 Sep'
      />
      </View>
    </View>
  );
}

const Chip = ({ label, selected }) => {
  return (
    <View
      style={[
        styles['chip-container'],
        { backgroundColor: selected ? 'black' : 'gray' },
      ]}
    >
      <Text style={styles.chipLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  'top-bar': {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'top-bar-title': { color: 'gray', fontSize: 20 },
  'chips-container': {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  'chip-container': {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginRight: 10,
  },
  chipLabel: {
    color: 'white',
  },

  guidlinesContainer: {
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    marginTop: 5,
    paddingVertical: 10,
  },
  commentsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
