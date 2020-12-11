/**
 * @format
 */

import {Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Login from '../src/Login';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it('Render successfully', () => {
  renderer.create(<Login />);
});

it('Be sure TextInput component is not exist', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find(TextInput).length).toEqual(0);
});

it('Be sure TouchableOpacity component is not exist', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find(TouchableOpacity).length).toEqual(0);
});

it('Be sure Image component has been imported', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find(Image).length).toBeGreaterThanOrEqual(1);
});
