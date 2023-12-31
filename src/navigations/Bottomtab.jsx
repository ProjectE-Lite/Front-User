import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notification from '../screen/home/Notification';
import { View, Text, Image} from 'react-native';
import { COLORS } from '../constants/colorIcon'; 
import Jobstack from './Jobstack';
import Transstack from './Transstack';
import Statusstack from './Statusstack';

const Tab = createBottomTabNavigator();

const Bottomtab = () => {
  return (
        <Tab.Navigator screenOptions={{headerShown: false,tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            height: 80,
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            backgroundColor: '#4F709C'

          }}}>
            <Tab.Screen name="ประกาศจ้าง2" 
            component={Jobstack}
            options={{title:'Homepage'
              ,tabBarIcon:({focused}) => {
                return(
                  <View style={{alignItems: 'center', justifyContent: 'center', height: 60}}>
                    <Image 
                    source={focused ? require('../assets/image/FooterIcon/PeopleOutline.png'): require('../assets/image/FooterIcon/People.png')}
                    style={{ marginTop: 15, width: 30, height: 20}}
                    resizeMode='contain'/>
                    <Text style={{color:'#000000'}}>ประกาศจ้าง</Text>
                  </View>
                )
              }
            }}
            ></Tab.Screen>
            <Tab.Screen name="งาน" 
            component={Statusstack}
            options={{
              tabBarIcon:({focused}) => {
                return(
                  <View style={{alignItems: 'center', justifyContent: 'center', height: 60,
                  borderTopColor: focused ? COLORS.primary : COLORS.background}}>
                    <Image 
                    source={focused ? require('../assets/image/FooterIcon/Card.png') : require('../assets/image/FooterIcon/CardOutline.png')}
                    style={{ marginTop: 15, width: 30, height: 20}}
                    resizeMode='contain'/>
                    <Text style={{color:'#000000'}}>งาน</Text>
                  </View>
                )
              }
            }}
            ></Tab.Screen>
            <Tab.Screen name="การแจ้งเตือน" 
            component={Notification}
            options={{
              tabBarIcon:({focused}) => {
                return(
                  <View style={{alignItems: 'center', justifyContent: 'center', height: 60,
                  borderTopColor: focused ? COLORS.primary : COLORS.background}}>
                    <Image 
                    source={focused ? require('../assets/image/FooterIcon/BellOutline.png') : require('../assets/image/FooterIcon/Bell.png')}
                    style={{ marginTop: 15, width: 30, height: 20}}
                    resizeMode='contain'/>
                    <Text style={{color:'#000000'}}>การแจ้งเตือน</Text>
                  </View>
                )
              }
            }}
            ></Tab.Screen>
            <Tab.Screen name="รายได้" 
            component={Transstack}
            options={{
              tabBarIcon:({focused}) => {
                return(
                  <View style={{alignItems: 'center', justifyContent: 'center', height: 60,
                  borderTopColor: focused ? COLORS.primary : COLORS.background}}>
                    <Image 
                    source={focused ? require('../assets/image/FooterIcon/DollarOutline.png') : require('../assets/image/FooterIcon/Dollar.png')}
                    style={{ marginTop: 15, width: 30, height: 20}}
                    resizeMode='contain'/>
                    <Text style={{color:'#000000'}}>รายได้</Text>
                  </View>
                )
              }
            }}
            ></Tab.Screen>
        </Tab.Navigator>
        
  )
}

export default Bottomtab;