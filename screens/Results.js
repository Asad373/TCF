import { Text, View, TouchableOpacity, Image } from "react-native";
import examModuleStyle from "../style/examModule";
import ssStyle from "../style/ssstyle";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import resultStyle from "../style/resultStyle";

import Colors from "../colors/Color";

const Results = () => {
  const Navigator = useNavigation();
  return (
    <View style={examModuleStyle.mainConatiner}>
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <View style={examModuleStyle.subContainer}>
          <View style={ssStyle.actionBar}>
            <TouchableOpacity style={ssStyle.backButton}>
              <Image source={require("../img/back.png")} />
            </TouchableOpacity>
            <View style={ssStyle.heading}>
              <Text style={[ssStyle.textColor, { fontSize: 18 }]}>Results</Text>
            </View>
          </View>
          <View style={examModuleStyle.contentContainer}>
            <View>
              <View style={resultStyle.resultBox}>
                <View style={resultStyle.topContent}>
                  <View style={resultStyle.textBox}>
                    <Text style={resultStyle.textColorWhite}>
                      Congrats, you completed your test with great accuracy.
                    </Text>
                  </View>
                  <View style={resultStyle.imgBox}>
                    <Image source={require("../img/oval.png")} />
                  </View>
                </View>
                <View style={resultStyle.horizontalDivider} />
                <View style={{ marginBottom: 20 }}>
                  <View style={resultStyle.bottomHeading}>
                    <Text style={resultStyle.tiltHeadingColor}>TYPE</Text>
                    <Text style={resultStyle.tiltHeadingColor}>EST. TIME</Text>
                  </View>
                  <View style={resultStyle.bottomHeading}>
                    <Text style={resultStyle.textColorWhite}>
                      Written comprehension
                    </Text>
                    <Text style={resultStyle.textColorWhite}>14 mins</Text>
                  </View>
                </View>
              </View>

              <View style={resultStyle.horizontalDividerBlack} />
              <View style={resultStyle.boxTest}>
                <View style={resultStyle.assRes}>
                  <View style={resultStyle.assFirstSection}>
                    <Text style={resultStyle.textColorGray}>Report</Text>
                    <View style={resultStyle.answerContainer}>
                      <Text style={resultStyle.chipCorrect}>12/24</Text>
                      <Text style={resultStyle.textColorWhite}>
                        Correct Answer
                      </Text>
                    </View>
                    <View style={resultStyle.answerContainer}>
                      <Text
                        style={[
                          resultStyle.chipCorrect,
                          { backgroundColor: Colors.redChip },
                        ]}
                      >
                        12/24
                      </Text>
                      <Text style={resultStyle.textColorWhite}>
                        Incorrect Answer
                      </Text>
                    </View>
                    <View style={resultStyle.assExamBtn}>
                      <Text style={resultStyle.textColorWhite}>
                        Assess My Exam
                      </Text>
                    </View>
                  </View>
                  <View>
                    <View>
                      <Image
                        style={{ width: 100, height: 100 }}
                        source={require("../img/circlepro.png")}
                      ></Image>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity>
        <View style={resultStyle.bottomButton}>
          <Text style={resultStyle.textColorWhite}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Results;
