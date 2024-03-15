import { View, Text, StyleSheet} from "react-native";
import Colors from "../colors/Color";

const ProgressCard = ()=>{
  return(
    <View style = {cardStyle.mainContainer}>
    
       <View style = {cardStyle.mainBarConatiner}>
       
        <View style = {cardStyle.circleGroupe}>
        <View style= {cardStyle.circle}>
       </View> 
       <View style= {cardStyle.circle}>
       </View>
       <View style= {cardStyle.circle}>
       </View>
        </View>

        <View style = {cardStyle.circleGroupeB}>
        <View style= {cardStyle.circle}>
       </View> 
       <View style= {cardStyle.circle}>
       </View>
       <View style= {cardStyle.circleA}>
       </View>
        </View>
        <View style = {cardStyle.mainBarConatinerB}></View>
      </View>
      <View style = {cardStyle.subContainer}>

        <Text style = {cardStyle.levelBadge}>Level 2</Text>
        <Text style = {cardStyle.levelTwo}>Complete this level to get reward</Text>

     </View>
    </View>
  );

}

const cardStyle = StyleSheet.create({
    mainContainer:{
        backgroundColor:Colors.cardBf,
        padding:20,
        borderRadius:10
    },
    mainBarConatiner:{
        height:10,
        borderRadius:20,
        backgroundColor:Colors.extraColor
    },
    mainBarConatinerB:{
        height:10,
        borderRadius:20,
        marginTop:-15,
        width:"70%",
        backgroundColor:Colors.purple
    },
   circle:{
    width:20,
    height:20,
    borderRadius:10,
    marginTop:-5,
    backgroundColor:Colors.purple
   }
 ,
   circleGroupe:{
    flexDirection:'row',
    justifyContent:'space-between',
   },

   circleGroupeB:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:-15,
   }
 ,
   circleA:{
    width:20,
    height:20,
    borderRadius:10,
    marginTop:-5,
    backgroundColor:Colors.extraColor
   },

   subContainer:{
    marginTop:20,
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },

  levelBadge:{
    backgroundColor:Colors.badgeColor,
    color:Colors.white,
    padding:10,
    borderRadius:10,
  },

  levelTwo:{
    marginStart:10,
    color:Colors.white,

  }
});

export default ProgressCard