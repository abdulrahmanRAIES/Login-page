/**
 * @format
 */

import {Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Login from '../src/Login';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';

it('Render successfully', () => {
  renderer.create(<Login />);
});

it('Be sure TextInput component is not exist', () => {
  const wrapper = render(<Login />);
  expect(wrapper.UNSAFE_queryAllByType(TextInput).length).toEqual(0);
});

it('Be sure TouchableOpacity component is not exist', () => {
  const wrapper = render(<Login />);
  expect(wrapper.UNSAFE_queryAllByType(TouchableOpacity).length).toEqual(0);
});

it('Be sure Image component has been imported', () => {
  const wrapper = render(<Login />);
  expect(wrapper.UNSAFE_queryAllByType(Image).length).toBeGreaterThanOrEqual(1);
});
