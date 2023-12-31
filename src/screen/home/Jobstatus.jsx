import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';

const Jobstatus = ({ route }) => {
  const Status = route.params.item.status
  const {name, start_time, end_time, type_of_work, hourly_income, state, color, image } = route.params.item.work_detail;
  const myDetail = route.params.item.work_detail.work_description.detail
  const myQualification = route.params.item.work_detail.work_description.qualification
  const navigation = useNavigation();

  const getStatusColor = (status) => {
    switch (status) {
      case 'กำลังทำ':
        return 'green';
      case 'รอ':
        return '#E9B824';
      case 'เสร็จ':
        return 'red';
      default:
        return '#000000';
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection : 'row' ,marginHorizontal: 10, marginBottom: 20, marginTop: 20, justifyContent:'center'}}>
        <View style={{
          height: 150,
          width: 150,
          borderRadius: 40, 
          marginRight: 10,
          overflow: 'hidden'
          }}>
            <Image 
              source={{uri: image}} 
              style={{ flex: 1, width: null, height: null,}}
              resizeMode='contain'
            />
        </View>
        <View style={{padding: 5, width: 175}}>
          <Text style = {{fontSize : 25}}>{name}</Text>
          <Text>{start_time} - {end_time}</Text>
          <Text style={{color : 'red'}}>ตำแหน่ง : {(() => {
              switch(type_of_work) {
                case 'type1':
                  return 'พนักงานเสิร์ฟ';
                case 'type2':
                  return 'พนักงานทำความสะอาด';
                case 'type3':
                  return 'ผู้ช่วยเชฟ';
                case 'type4':
                  return 'พนักงานต้อนรับ';
                case 'type5':
                  return 'พนักงานล้างจาน';
                case 'type6':
                  return 'พนักงานส่งอาหาร';
                case 'type7':
                  return 'พนักงานครัวร้อน';
                default:
                  return type_of_work;
              }
            })()}</Text>
          <Text>{hourly_income} เครดิต/ชั่วโมง</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style = {{fontSize : 19, color: 'white'}}>รายละเอียดงาน</Text>
        <View style={{marginLeft: 10, marginTop:5}}>
          <Text>{myDetail}</Text>
        </View>
      </View>
        <View style={styles.textContainer}>
          <Text style = {{fontSize : 19, color: 'white'}}>คุณสมบัติผู้สมัคร</Text>
          <View style={{marginLeft: 10, marginTop:5}}>
            <Text>{myQualification}</Text>
          </View>
        </View>
        <View style={{justifyContent:'center', alignItems:'center', marginTop:20, marginHorizontal: 20, borderWidth:1, height:50, borderRadius:10, backgroundColor: getStatusColor(Status), borderColor: '#ffffff' }}>
            <Text style={{color: 'white', fontSize: 19}}>{Status}</Text>
        </View>
      <View style={{ marginVertical:10, marginBottom: 100}}>
        <Button title="ย้อนกลับ" onPress={() => {navigation.goBack()}}></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    marginBottom: 10,
    borderRadius:20
  },
  textContainer: {
    backgroundColor: '#6A9C89',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 25,
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
  bottomText: {
    fontSize: 16,
  },
});

export default Jobstatus;
