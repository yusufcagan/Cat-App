import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Bg from '../assets/images/catsdoodle.png';
import BackIcon from '../assets/images/arrow-back.svg';
import SettingIcon from '../assets/images/setting.svg';
import Yc from '../assets/images/yc.jpg';
import PlusIcon from '../assets/images/plus.svg';
import Shiba from '../assets/images/shiba2.svg';
import colors from '../utils/Color';
import {screenHeight, screenWidth} from '../utils/AppDimensions';

const ProfileScreen = () => {
  return (
    <ImageBackground source={Bg} style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{margin: 22}}>
          <View style={styles.head}>
            <View
              style={{
                backgroundColor: colors.secondary,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                }}>
                <TouchableOpacity>
                  <BackIcon />
                </TouchableOpacity>
                <Text style={styles.userNameText}>@yusufcagan</Text>
                <TouchableOpacity>
                  <SettingIcon />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  position: 'absolute',
                  right: 0,
                  padding: 10,
                  marginTop: 35,
                }}>
                <PlusIcon />
              </TouchableOpacity>
              <View style={{alignItems: 'center', marginTop: 10}}>
                <Image
                  source={Yc}
                  style={{
                    width: screenWidth / 4,
                    height: screenWidth / 4,
                    borderRadius: 8,
                  }}
                />
                <Text style={styles.nameText}>Yusuf Çağan</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 10,
              }}>
              <View>
                <Text style={styles.followNumberText}>100</Text>
                <Text style={styles.followText}>Takip</Text>
              </View>
              <View>
                <Text style={styles.followNumberText}>150</Text>
                <Text style={styles.followText}>Takipçi</Text>
              </View>
              <View>
                <Text style={styles.followNumberText}>3</Text>
                <Text style={styles.followText}>Kedi</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: screenHeight / 10,
            }}>
            <Shiba opacity="0.5" />
            <View>
              <Text style={styles.descriptionText}>Henüz</Text>
              <Text style={styles.descriptionText}>hiç animal</Text>
              <Text style={styles.descriptionText}>eklemediniz</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  head: {
    width: 'auto',
    borderWidth: 2,
    borderColor: colors.secondary,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#fff',
  },
  userNameText: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    color: colors.primary,
  },
  nameText: {
    fontSize: 29,
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
    marginTop: 10,
    marginBottom: 10,
  },
  followText: {
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
    color: colors.primary,
    textAlign: 'center',
  },
  followNumberText: {
    fontSize: 23,
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: colors.primary,
    opacity: 0.5,
  },
});
export default ProfileScreen;
