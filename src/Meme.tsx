import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

export interface IMeme {
  image: string;
  title: string;
  description: string;
}

export interface IMemeProps {
  onPress(): void;
}

const Meme = React.memo(({image, title, onPress}: IMeme & IMemeProps) => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} testID={title}>
        <Image
          source={{uri: image}}
          style={styles.image}
          resizeMode={'cover'}
        />
      </TouchableOpacity>
    </>
  );
});

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default Meme;
