import React from 'react';
import {SafeAreaView, View, Text,StyleSheet,Image,TextInput,Button,TouchableOpacity} from 'react-native';
import MyButton from './MyButton';
const MyTextInput=(props)=>{
    return(
       <View style={styles.container}>
       <TextInput placeholder="Email... " placeholderTextColor="black" 
       onChangeText={(value)=> console.log(value)}  style={styles.input}
       />

      
       </View>
    );
};


   const styles=StyleSheet.create({
    container:{
        //backgroundColor:'#003f5c',
        //backgroundColor:'red',
        padding:20,
        //margin:10,
       // borderRadius:20,
        //height: 500, 
        //alignItems: 'center',
        //marginBottom:30,
    },
    input:{
        height:40,
        backgroundColor:"white",
        marginBottom:10,
        borderRadius:20,
        color: 'black',
        paddingHorizontal:10,
        
    },
    input1:{
         //height:40,
        //backgroundColor:`#ff6347`,
        //marginBottom:10,
        //borderRadius:20,
        color: 'black',
        //paddingHorizontal:10,
        justifyContent: 'center',
        padding:5,
        
    },
    button: {
        //alignItems: "center",
        backgroundColor: "#003f5c",
        paddingVertical:5,
       // paddingVertical:1,
        //padding:1,
        //fontSize:16,
        borderRadius:20,
        alignItems: 'center',
        //padding: 1
      },

});
export default MyTextInput;
