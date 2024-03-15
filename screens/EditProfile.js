import { View, Text, Image } from "react-native";
import ssStyle from "../style/ssstyle";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import RadioButtons from "../components/Level";
import profileStyle from "../style/profileStyle";
import ProgressCard from "../components/ProgressCard";
import Colors from "../colors/Color";
import Panel from "../components/Panel";
import EditStyle from "../style/EditProfile";
import InputField from "../components/Input";
import EditField from "../components/EditProfileField";
const EditProfile = () => {
  const Navigator = useNavigation();

  const loadNext = () => {
    Navigator.navigate("studyspacetwo");
  };
  return (
    <View style={ssStyle.mainContainer}>
      <ScrollView>
        <View style={profileStyle.mainActoinBar}>
          <View style={profileStyle.Container}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}

              onPress={()=>{Navigator.goBack()}}
            >
              <Image source={require("../img/back.png")} />
            </TouchableOpacity>
            <Text style={profileStyle.textColor}>Edit Profile</Text>
            <View>
              <TouchableOpacity
                onPress={() => {
                  Navigator.navigate("profile");
                }}
              >
                <Text style={EditStyle.doneButton}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={profileStyle.contentContainer}>
          <TouchableOpacity style={profileStyle.profileContainer}>
            <Image source={require("../img/avatar.png")}></Image>
          </TouchableOpacity>
          <View style = {EditStyle.editPane}>
            <Text style = {EditStyle.textHeading}>YOUR NAME</Text>
            <EditField hint={"Jhon Dow"} fontSizePx={20} onVlaueChnaged={()=>{}}></EditField>

            <Text style = {EditStyle.textHeading}>YOUR EMAIL</Text>
            <EditField hint={"jhon@gmail.com"} type={'password'} fontSizePx={20} onVlaueChnaged={()=>{}}></EditField>

            <Text style = {EditStyle.textHeading}>YOUR PASSWORD</Text>
            <EditField hint={"Lok@34Uk"} type={'password'} fontSizePx={20} onVlaueChnaged={()=>{}}></EditField>
          </View>
        </View>
      
      </ScrollView>
    </View>
  );
};

export default EditProfile;
