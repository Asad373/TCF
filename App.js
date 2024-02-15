import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Register from './screens/Registration';
import Dashboard from './screens/Dashboard';
import Studyspace from './screens/Studyspace';
import StudyspaceTwo from './screens/StudyspaceTwo';
import ExamModule from './screens/ExamModule';
import AnswerSheet from './screens/AnswerSheet';
import Results from './screens/Results';
import WrittenComp from './screens/WritteNComp';
import WrittenCompAss from './screens/WrittenCompAss';



//

const Stack = createStackNavigator();
//
const screenOptions = {
  headerShown: false,
};
export default function App() {
  return (
    <>
     <StatusBar style="auto" />
     <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen  name='onboard' component={Home}/>
        <Stack.Screen  name='register' component={Register}/>
        <Stack.Screen name='dasboard' component={Dashboard}/>
        <Stack.Screen name='studyspace' component={Studyspace}/>
        <Stack.Screen name='studyspacetwo' component={StudyspaceTwo}/>
        <Stack.Screen name='exammodule' component={ExamModule}/>
        <Stack.Screen name='answer' component={AnswerSheet}/>
        <Stack.Screen  name='result' component={Results}/>
        <Stack.Screen  name='written' component={WrittenComp}/>
        <Stack.Screen  name='wasses' component={WrittenCompAss}/>
      </Stack.Navigator>
     </NavigationContainer>
     
    </>
  );
}


