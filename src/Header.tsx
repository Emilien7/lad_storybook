import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface IHeader {
  onChangeText(text: string): void;
  title: string;
}

const Header = ({onChangeText, title}: IHeader): JSX.Element => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <>
      <View style={[styles.container, styles.row]}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <Text style={styles.counter} accessibilityLabel={'counter'}>
            {count}
          </Text>
          <TouchableOpacity
            onPress={onPress}
            style={styles.button}
            testID={'pressHere'}>
            <Text style={styles.button_text}>Жмяк сюда</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder={'Найти'}
        onChangeText={onChangeText}
        testID={'search'}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  title: {
    paddingVertical: 15,
    fontSize: 24,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#3992de',
    borderRadius: 12,
  },
  button_text: {
    color: '#ffffff',
    fontWeight: '500',
  },
  counter: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default Header;
