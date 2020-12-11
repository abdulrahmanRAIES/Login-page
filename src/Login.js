
import React from 'react';
import {SafeAreaView, View, Text,StyleSheet,Platform,Button, Image,TouchableOpacity } from 'react-native';
import MyButton from './component/MyButton';
import MyTextInput from './component/MyTextInput';
// You can test your code with "npm test" (or "yarn test" if you using yarn)

function Login() { 
  return (
    <SafeAreaView style={ styles.containerBasic}>
      <View style={ styles.containerBasic}>
        
        
        <View style={ styles.container1}> 
          <Image  style={styles.logo}source={require('./Image/music.png')}/>
          <View>

          <Text style={styles.titlee}>2MUSIC</Text> 
            </View>
        </View>
        
        <View style={ styles.container2}>  
          <MyTextInput mytitle="Email..."/> 
          <MyTextInput mytitle="Password....."/> 

          
        
       <MyButton mytitle="LOG IN"  myColor="#fb5b5a"/>
       <MyButton mytitle="SIGN UP" myColor="#003f5c"/>
       
      
        </View>
      </View> 
    </SafeAreaView>
  );
}
export default Login;
const styles=StyleSheet.create({
  container2:{
  //backgroundColor:'red',
  justifyContent: 'center',
   
},
container1:{
  alignItems: 'center',
  justifyContent: 'center',
  //backgroundColor:'blue',

  margin:40,
  //marginBottom:10,
  //marginTop:80,  
},
containerBasic:{
  flex: 1,
  backgroundColor: '#003f5c',  
  //alignItems: "center",
  //justifyContent: "center",
},
logo: {
  width: 100,
  height: 100,
  
},
logoo: {
  backgroundColor:'red',
  justifyContent: 'center',
  flexDirection:'row'
  
},
titlee: {
  marginTop:10,
  fontSize:30,
  color:`#6495ed`,
  fontFamily:'sans-serif',
  textAlign:'center'
  
},
})
