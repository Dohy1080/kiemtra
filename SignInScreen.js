import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import PhoneInput from 'react-native-phone-number-input'; // Thư viện nhập số điện thoại

const SignInScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');

  return (
    <ImageBackground
      source={{
        uri: 'https://cdn.glitch.global/c0d44304-6f07-405c-9924-a4fd595f249c/c8891760-352e-4e6c-9032-9922bb11c54e.hoa.png?v=1729075833432',
      }}
      style={styles.container}
    >
      <Text style={styles.title}>Get your groceries with nectar</Text>

      {/* Phần nhập số điện thoại */}
      <PhoneInput
        defaultCode="US" // Mã quốc gia mặc định
        layout="first"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        onChangeFormattedText={(text) => setFormattedValue(text)}
        withShadow
        autoFocus
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
      />

      <Text style={styles.orText}>Or connect with social media</Text>

      {/* Container for buttons */}
      <View style={styles.buttonContainer}>
        {/* Nút Đăng nhập với Google và Facebook */}
        <Button title="Continue with Google" onPress={() => {}} color="#4285F4" />
        <View style={styles.spacer} />
        <Button title="Continue with Facebook" onPress={() => {}} color="#3B5998" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
    color: '#aaa',
  },
  buttonContainer: {
    width: '100%', // Ensures buttons take full width
    alignItems: 'center', // Center buttons horizontally
  },
  spacer: {
    height: 10, // Space between buttons
  },
});

export default SignInScreen;
