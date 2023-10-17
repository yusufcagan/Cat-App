import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Bg from '../assets/images/catsdoodle.png';
import BackButton from '../components/BackButton';
import Shiba from '../assets/images/shiba.svg';
import SettingButton from '../components/SettingButton';
import {screenHeight, screenWidth} from '../utils/AppDimensions';
import colors from '../utils/Color';

const Register = ({navigation}) => {
  return (
    <ImageBackground source={Bg} style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{margin: 30}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <BackButton navigation={navigation} />
            <SettingButton />
          </View>
          <View style={styles.head}>
            <View>
              <Text style={styles.headText}>Yeni hesap</Text>
              <Text style={[styles.headText, {marginTop: -20}]}>oluştur</Text>
              <Text style={styles.smallText}>Zaten bir heasbın var mı?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text
                  style={[styles.smallText, {fontFamily: 'Poppins-Medium'}]}>
                  Giriş Yap
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
            <Text style={[styles.inputText]}>E-mail</Text>
            <TextInput
              style={{paddingLeft: 20}}
              placeholder="isim@mail.com"
              placeholderTextColor={colors.primary}
            />
          </View>
          <View style={styles.textInputView}>
            <Text style={[styles.inputText]}>Telefon</Text>
            <TextInput
              style={{paddingLeft: 20}}
              placeholder="+90 555 555 55 55"
              placeholderTextColor={colors.primary}
            />
          </View>
          <View style={styles.textInputView}>
            <Text style={[styles.inputText]}>Şifre</Text>
            <TextInput
              style={{paddingLeft: 20}}
              placeholder="••••••••••••••••••"
              placeholderTextColor={colors.primary}
            />
          </View>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonText}>Kayıt Ol</Text>
          </TouchableOpacity>
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
    marginTop: 20,
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
    marginTop: 20,
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
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: colors.secondary,
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
  },
});
export default Register;
