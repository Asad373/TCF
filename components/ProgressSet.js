import { StyleSheet, View } from "react-native";
import Colors from "../colors/Color";
import { LinearGradient } from "react-native-svg";


const ProgressSet =({widthbg, heightbg, width, height})=>{
 return(
    <View style = {[proStyle.mainBar, {width:widthbg, height:heightbg}]}>
            <View style = {[proStyle.upperlayer, {width:width, height:height}]}></View>
    </View>
 );
}

const proStyle = StyleSheet.create({
    mainBar:{
        backgroundColor:Colors.backGround,
        borderRadius:3,
       
    },
  
    upperlayer:{
        backgroundColor:Colors.extraColor,
        borderRadius:3,
        
    }
      
});

export default ProgressSet 

