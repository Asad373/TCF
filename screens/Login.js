import { View, Text, Image, SafeAreaView } from "react-native";
import RegisStyle from "../style/RegisStyle";
import { StatusBar } from "expo-status-bar";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import InputField from "../components/Input";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Colors from "../colors/Color";
const Login = () => {
  const Navigator = useNavigation();
  const [emai, setEmail] = useState("");
  const [name, setName] = useState("");

  const emailCallBack = (value) => {
    setEmail(value);
  };
  const nameCallBack = (value) => {
    setName(value);
  };

  const continueTo = ()=>{
     Navigator.navigate('dasboard');
  }
  return (
    <View style={RegisStyle.mainContainer}>
      <ScrollView style={RegisStyle.mainContainer}>
        <TouchableOpacity>
          <View style={RegisStyle.backButtonContainer}>
            <Image source={require("../img/back.png")} />
          </View>
        </TouchableOpacity>
        <View style={RegisStyle.mainUIContainer}>
          <Text style={RegisStyle.heading}>Login</Text>
          <View style={RegisStyle.inputContainer}>
            <Text style={RegisStyle.TextColor}>YOUR EMAIL</Text>
            <View style={RegisStyle.InputContainer}>
              <InputField
                hint={"jhonedoe@example.com"}
                type={false}
                multilieflag={false}
                onVlaueChnaged={emailCallBack}
                fontSizePx={16}
              ></InputField>
            </View>
           
            <View style={RegisStyle.InputContainer}>
              <Text style={RegisStyle.TextColor}>SET PASSWORD</Text>
              <View style={RegisStyle.InputContainer}>
                <InputField
                  hint={"*****"}
                  type={true}
                  multilieflag={false}
                  onVlaueChnaged={emailCallBack}
                  fontSizePx={16}
                ></InputField>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style = {{ display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Text style = {{color:Colors.white, fontSize:15}}>Forgot Your Password?</Text>
     </View>
      <TouchableOpacity onPress={continueTo}>
        <View style={RegisStyle.bottomButton}>
          <Text style={RegisStyle.buttonText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
