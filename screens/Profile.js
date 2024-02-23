import { View, Text, Image } from "react-native";
import ssStyle from "../style/ssstyle";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import RadioButtons from "../components/Level";
import profileStyle from "../style/profileStyle";

const Profile = () => {
    const Navigator  = useNavigation();

      const loadNext = ()=>{
      Navigator.navigate('studyspacetwo')
    }
  return (
    <View style={ssStyle.mainContainer}>
       <View style = {profileStyle.mainActoinBar}>
          <View style={profileStyle.Container}>
          <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Image source={require("../img/back.png")} />
          </TouchableOpacity>
          <Text>Profile</Text>
          <View>
            <Text>Edit</Text>
          </View>
          </View>
       </View>
    </View>
  );
};

export default Profile;
