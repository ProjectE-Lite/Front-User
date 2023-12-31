import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Profile from '../screen/profile/Profile';
import Edit from '../screen/profile/Edit';
import Resume from '../screen/profile/Resume';


const Editstack = createStackNavigator();
const Profilestack = () => {
  return (
    <Editstack.Navigator screenOptions={{headerShown: false}} initialRouteName='Profileinside'>
        <Editstack.Screen name="Profileinside" component={Profile}></Editstack.Screen>
        <Editstack.Screen name="EditProfile" component={Edit}></Editstack.Screen>
        <Editstack.Screen name="resume" component={Resume}></Editstack.Screen>
    </Editstack.Navigator>
  )
}

export default Profilestack