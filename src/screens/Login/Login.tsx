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
import Bg from '../../assets/catsdoodle.png';
import Shiba from '../../assets/shiba1.svg';
import SettingButton from '../../components/SettingButton';
import colors from '../../utils/Color';
import {screenHeight, screenWidth} from '../../Utils/AppDimensions';

const Login = () => {
  return (
    <ImageBackground source={Bg} style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{margin: 22}}>
          <SettingButton alignSelf="flex-end" />
          <View style={styles.head}>
            <View>
              <Text style={styles.headText}>Hoş</Text>
              <Text style={styles.headText}>Geldin!</Text>
              <Text style={styles.smallText}>Hesabın yok mu?</Text>
              <Text style={[styles.smallText, {fontWeight: 'normal'}]}>
                Kayıt ol
              </Text>
            </View>
            <View
              style={{
                width: screenWidth / 2,
              }}>
              <Shiba width="100%" />
            </View>
          </View>
          <View style={styles.textInputView}>
            <Text style={styles.inputText}>Kullanıcı Adı</Text>
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
            <Text style={[styles.smallText, {fontWeight: '300'}]}>
              Şifrenizi mi unuttunuz?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonText}>Giriş</Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={[styles.smallText, {fontWeight: '300'}]}>
              Farklı bir yolla giriş yapabilirsin
            </Text>
            <View style={styles.foot}>
              <TouchableOpacity style={styles.miniButton}></TouchableOpacity>
              <TouchableOpacity style={styles.miniButton}></TouchableOpacity>
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
    fontWeight: 'bold',
    color: colors.primary,
  },
  smallText: {
    fontSize: 13,
    fontWeight: '300',
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
    fontWeight: '300',
    zIndex: 2,
    paddingHorizontal: 8,
  },
  textInput: {
    paddingLeft: 20,
    fontSize: 13,
    fontWeight: '400',
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
    fontWeight: 'bold',
  },
  foot: {
    flexDirection: 'row',
    // marginTop: 5,
  },
  miniButton: {
    height: screenWidth / 7,
    width: screenWidth / 7,
    borderRadius: 10,
    margin: 5,
    backgroundColor: colors.primary,
  },
});
export default Login;
