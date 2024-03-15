import { Text, View, TouchableOpacity, Image } from "react-native";
import examModuleStyle from "../style/examModule";
import ssStyle from "../style/ssstyle";
import ProgressBar from "../components/ProgressBar";
import MCRadioButton from "../components/McqQuestion";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Colors from "../colors/Color";
const ExamModule = () => {
    const Navigator  = useNavigation();
  return (
    <View style={examModuleStyle.mainConatiner}>
        <ScrollView>
      <View style={examModuleStyle.subContainer}>
        <View style={ssStyle.actionBar}>
          <TouchableOpacity style={ssStyle.backButton} onPress={()=>{Navigator.goBack()}}>
            <Image source={require("../img/back.png")} />
          </TouchableOpacity>
          <View style={ssStyle.heading}>
            <Text style={[ssStyle.textColor, { fontSize: 18 }]}>
              Exam Module
            </Text>
          </View>
        </View>
        <View style={examModuleStyle.contentContainer}>
          <View style={examModuleStyle.progressActionBar}>
            <View style={examModuleStyle.progressWidth}>
              <ProgressBar></ProgressBar>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={examModuleStyle.verticalDivider} />
            </View>
            <View style={examModuleStyle.countChip}>
              <Text style = {{color:Colors.white}}>Tips</Text>
            </View>
          </View>
          <View style={examModuleStyle.questionConatiner}>
            <Text style={examModuleStyle.questionText}>
              Je te laisse, je dois aller à la poste, je veux... ... un colis en
              Espagne{" "}
            </Text>
          </View>
          <View style={{ marginTop: 50 }}>
            <MCRadioButton></MCRadioButton>
          </View>
        </View>
      </View>
      </ScrollView>
      <View style = {examModuleStyle.bottomNavigation}>
        <View style = {examModuleStyle.btnBottom}>
        <TouchableOpacity style = {examModuleStyle.btnSkip}>
        <Text style = {examModuleStyle.btnSkipTextDecor}>Skip</Text>
        </TouchableOpacity>

        <View style = {examModuleStyle.ValueChip} > 
        <Text>1/20</Text>
        </View>

        <TouchableOpacity style = {examModuleStyle.btnNext} onPress={()=>{ Navigator.navigate('result')}}> 
        <Text style = {examModuleStyle.btnTextColor}>Next</Text>
        </TouchableOpacity>
        </View>
        
      </View>
      
    </View>
  );
};

export default ExamModule;
