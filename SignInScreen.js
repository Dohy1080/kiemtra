import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { FontAwesome } from '@expo/vector-icons'; // Thư viện icon

const SignInScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');

  const screenHeight = Dimensions.get('window').height; // Lấy chiều cao màn hình

  return (
    <View style={styles.container}>
      {/* Ảnh nền phía trên */}
      <ImageBackground
        source={{
          uri: 'https://cdn.glitch.global/c0d44304-6f07-405c-9924-a4fd595f249c/c8891760-352e-4e6c-9032-9922bb11c54e.hoa.png?v=1729075833432',
        }}
        style={[styles.imageBackground, { height: screenHeight * 0.45 }]} // 45% màn hình
        resizeMode="cover"
      />

      {/* Phần nội dung phía dưới */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Get your groceries with nectar</Text>

        {/* Nhập số điện thoại */}
        <PhoneInput
          defaultCode="BD"
          layout="first"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          onChangeFormattedText={(text) => setFormattedValue(text)}
          withShadow
          containerStyle={styles.phoneContainer}
          textContainerStyle={styles.textInput}
        />

        <Text style={styles.orText}>Or connect with social media</Text>

        {/* Nút đăng nhập Google và Facebook */}
        <TouchableOpacity style={styles.googleButton}>
          <FontAwesome name="google" size={20} color="white" />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookButton}>
          <FontAwesome name="facebook" size={20} color="white" />
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageBackground: {
    width: '100%',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  phoneContainer: {
    width: '100%',
    height: 60,
    marginVertical: 10,
  },
  textInput: {
    paddingVertical: 0,
  },
  orText: {
    marginVertical: 10,
    textAlign: 'center',
    color: '#aaa',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B5998',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SignInScreen;
