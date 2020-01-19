import React from 'react';
import {Text} from 'react-native';

const HelloWorld = ({name}) => {
  return (
    <Text style={{backgroundColor: 'red', paddingTop:50}}>MyFancyButton component {name}</Text>
  );
};
export default HelloWorld;