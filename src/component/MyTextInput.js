import React from 'react';
import {SafeAreaView, View, Text,StyleSheet,Image,TextInput,Button,TouchableOpacity} from 'react-native';
import MyButton from './MyButton';
const MyTextInput=(props)=>{
    return(
       <View style={styles.container}>
       <TextInput placeholder={props.mytitle} placeholderTextColor="black" 
       onChangeText={(value)=> console.log(value)}  style={styles.input}
       />
       </View>
    );
};


   const styles=StyleSheet.create({
    container:{
        padding:20,
    },
    input:{
        height:40,
        backgroundColor:"white",
        marginBottom:10,
        borderRadius:20,
        color: 'black',
        paddingHorizontal:10,
        
    },
});
export default MyTextInput;
