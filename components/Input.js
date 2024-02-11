import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You might need to install '@expo/vector-icons' package
import Colors from '../colors/Color';


const InputField = ({hint,type,onVlaueChnaged}) => {
  const [text, setText] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const clearText = () => {
    setText('');
    onVlaueChnaged("")
  };
 
 const HandleChange= (value) =>{
    setText(value)
    onVlaueChnaged(value)
 }
  return (
    <View style={styles.inputContainerInner}>
      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.white}
        fontSize={20}
        placeholder={hint}
        value={text}
        secureTextEntry = {type && !showPassword}
        onChangeText={HandleChange}
      />
      {text.length > 0 && !type && (
        <TouchableOpacity onPress={clearText} style={styles.clearButton}>
          <Ionicons name="close-circle" size={24} color="gray" />
        </TouchableOpacity>
      )}
       {type && (
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
          <Ionicons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainerInner: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    
    borderBottomColor: Colors.inputBorderColor,
    alignItems: 'center',
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 5,
    color:Colors.white,
  },
  clearButton: {
    padding: 5,
  },
});

export default InputField;
