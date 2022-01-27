// components/Task.js
import * as React from 'react';
import { TextInput, SafeAreaView } from 'react-native';
import Plus from '../../assets/plus.svg';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <SafeAreaView>
    <TextInput value={title} editable={false} />
    <Plus />
  </SafeAreaView>
);
}
