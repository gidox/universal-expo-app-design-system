import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import Card from './Card';

export default {
  title: 'Card',
};

export const text = () => (
  <Card />
);

// On-Device Register
storiesOf('Card', module).add('Text', text);