import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import Bg from '../assets/images/catsdoodle.png';

const Share = () => {
  return (
    <ImageBackground source={Bg} style={{width: '100%', height: '100%'}}>
      <Text>Share</Text>
    </ImageBackground>
  );
};

export default Share;
