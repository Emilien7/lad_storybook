import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {CustomButton, TButton} from './Button';
import {select, text} from "@storybook/addon-knobs";
import {View} from "react-native";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: CustomButton,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: "center", paddingVertical: 30 }}>
        {Story()}
      </View>
    )
  ],
  argTypes: {
    size: {
      options: ['fixed', 'large', 'small'],
      control: { type: 'select', default: 'fixed'}
    },
    style: {
      options: ['primary', 'secondary', 'muted', 'text', 'loading'],
      control: { type: 'select'}
    },
    icon: {
      options: ['left', 'right', 'counter', 'none'],
      control: { type: 'select'}
    },
    text: {
      control: {
        type: 'text',
      }
    }
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CustomButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Template: ComponentStory<typeof CustomButton> = (args) => <CustomButton {...args}/>;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
