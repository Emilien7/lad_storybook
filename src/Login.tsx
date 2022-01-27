import React, {useCallback, useState} from 'react';
import {Alert, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CustomButton} from "./stories/Button";
import {EButtonIcon, EButtonSize, EButtonStyle} from "./stories/enums";

const Login = (): JSX.Element => {
  const navigation = useNavigation();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const onPress = () => {
    if (password === '123456') {
      navigateToMemes();
    } else {
      Alert.alert('Неверный пароль', 'Попробуйте еще раз');
    }
  };

  const navigateToMemes = useCallback(() => {
    navigation.navigate('Memes', {login});
  }, [login, navigation]);

  const handleError = () => {
    if (password.length < 5) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const [btnStyle, changeBtnStyle] = useState<EButtonStyle>(EButtonStyle.secondary)

  return (
    <View style={styles.container} onTouchStart={() => Keyboard.dismiss()}>
      <Image source={require('./0b9.png')} style={styles.pattison} />
      <Text style={styles.title} accessibilityLabel={'auth'}>
        Авторизация
      </Text>
      <TextInput
        testID={'login'}
        placeholder={'Логин'}
        style={styles.input}
        onChangeText={setLogin}
        enablesReturnKeyAutomatically
      />
      <TextInput
        testID={'password'}
        placeholder={'Пароль'}
        style={styles.input}
        onChangeText={setPassword}
        secureTextEntry
        onEndEditing={handleError}
      />
      {error && (
        <Text style={styles.error}>
          Пароль должен содержать минимум 5 символов
        </Text>
      )}
      <CustomButton size={EButtonSize.large} style={btnStyle} icon={EButtonIcon.right} text={'Pepega'} onPress={() => {
        changeBtnStyle(btnStyle === EButtonStyle.loading ? EButtonStyle.primary : EButtonStyle.loading)
      }} />
      <TouchableOpacity
        testID={'enter'}
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.button_text}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    marginVertical: 20,
  },
  input: {
    width: '60%',
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#a3b1ca',
  },
  button: {
    width: '60%',
    height: 50,
    backgroundColor: '#1b40bc',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 12,
  },
  button_text: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  error: {
    color: 'red',
    fontSize: 10,
    fontWeight: '500',
    marginVertical: 10,
  },
  pattison: {position: 'absolute', bottom: -700, left: -100},
});

export default Login;
