import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Bg from '../assets/images/catsdoodle.png';
import Shiba from '../assets/images/shiba1.svg';
import Instagram from '../assets/images/instagram.svg';
import Google from '../assets/images/google.svg';
import SettingButton from '../components/SettingButton';
import colors from '../utils/Color';
import {screenHeight, screenWidth} from '../utils/AppDimensions';

const Login = ({navigation}) => {
  return (
    <ImageBackground source={Bg} style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{margin: 22}}>
          <SettingButton alignSelf="flex-end" />
          <View style={styles.head}>
            <View>
              <Text style={styles.headText}>Hoş</Text>
              <Text style={[styles.headText, {marginTop: -20}]}>Geldin!</Text>
              <Text style={styles.smallText}>Hesabın yok mu?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text
                  style={[styles.smallText, {fontFamily: 'Poppins-Medium'}]}>
                  Kayıt ol
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: screenWidth / 2,
              }}>
              <Shiba width="100%" />
            </View>
          </View>
          <View style={styles.textInputView}>
            <Text style={[styles.inputText]}>Kullanıcı Adı</Text>
            <TextInput
              style={{paddingLeft: 20}}
              placeholder="Kullanıcı Adını giriniz"
              placeholderTextColor={colors.primary}
            />
          </View>
          <View style={styles.textInputView}>
            <Text style={styles.inputText}>Parola</Text>
            <TextInput
              style={{paddingLeft: 20}}
              placeholder="••••••••••••••••••"
              placeholderTextColor={colors.primary}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={{marginTop: 10, alignSelf: 'flex-end'}}>
            <Text style={[styles.smallText, {fontFamily: 'Poppins-Regular'}]}>
              Şifrenizi mi unuttunuz?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyTabs')}
            style={styles.loginButton}>
            <Text style={styles.buttonText}>Giriş</Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={[styles.smallText, {fontFamily: 'Poppins-Regular'}]}>
              Farklı bir yolla giriş yapabilirsin
            </Text>
            <View style={styles.foot}>
              <TouchableOpacity style={styles.miniButton}>
                <Google width="100%" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.miniButton}>
                <Instagram width="100%" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headText: {
    fontSize: 36,
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
  },
  smallText: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color: colors.primary,
  },
  textInputView: {
    width: 'auto',
    height: screenHeight / 13,
    marginTop: 30,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 15,
    zIndex: -1,
  },
  inputText: {
    position: 'absolute',
    top: -10,
    marginLeft: 15,
    fontSize: 11,
    color: colors.primary,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 8,
    backgroundColor: 'transparent',
  },
  textInput: {
    paddingLeft: 20,
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
  },
  loginButton: {
    width: 'auto',
    height: screenHeight / 13,
    backgroundColor: colors.primary,
    marginTop: screenHeight / 13,
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: colors.secondary,
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
  },
  foot: {
    flexDirection: 'row',
  },
  miniButton: {
    height: screenWidth / 7,
    width: screenWidth / 7,
    borderRadius: 10,
    margin: 5,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Login;
