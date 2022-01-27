import React, {useCallback, useEffect, useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Meme, {IMeme, IMemeProps} from './Meme';
import {memes} from './memes';
import Header from './Header';
import {useRoute} from '@react-navigation/native';

const FullMeme = ({
  image,
  title,
  description,
  onPress,
}: IMeme & IMemeProps): JSX.Element => {
  const animatedValue = new Animated.Value(0);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.25, 1],
  });

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <TouchableOpacity
      testID={'#' + title}
      onPress={onPress}
      style={[
        StyleSheet.absoluteFillObject,
        {zIndex: 10, backgroundColor: '#ffffff'},
      ]}>
      <Animated.Image source={{uri: image}} style={[styles.image, {opacity}]} />
      <Animated.Text style={[styles.title, {transform: [{translateY}]}]}>
        {title}
      </Animated.Text>
      <Animated.Text style={[styles.description, {transform: [{translateY}]}]}>
        {description}
      </Animated.Text>
    </TouchableOpacity>
  );
};

const MemesList = (): JSX.Element => {
  const {params} = useRoute();
  const {login} = params;
  const [memesList, setMemesList] = useState<IMeme[]>(memes);
  const [meme, setMeme] = useState<IMeme | null>(null);

  const search = useCallback((text: string) => {
    const filteredMemes = memes.filter(
      e => e.title.includes(text) || e.description.includes(text),
    );
    setMemesList(filteredMemes);
  }, []);

  return (
    <>
      {meme && (
        <FullMeme
          image={meme.image}
          title={meme.title}
          description={meme.description}
          onPress={() => setMeme(null)}
        />
      )}
      <FlatList
        testID={'list'}
        ListHeaderComponent={<Header onChangeText={search} title={login} />}
        keyExtractor={item => item.title}
        data={memesList}
        columnWrapperStyle={{width: '50%'}}
        numColumns={2}
        renderItem={({item}) => (
          <Meme
            image={item.image}
            title={item.title}
            description={item.description}
            onPress={() => {
              setMeme(item);
            }}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: '700',
  },
  description: {
    paddingHorizontal: 20,
    textAlign: 'justify',
  },
});

export default MemesList;
