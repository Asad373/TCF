import Colors from "../colors/Color";
import { StyleSheet } from "react-native";

const profileStyle = StyleSheet.create({
  mainActoinBar:{
    marginTop:50,
    marginStart:20,
    marginEnd:20,
  },
  Container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
textColor:{
    color:Colors.white,
    fontSize:20,
}
});

export default profileStyle;