import React from 'react';
import { View,TouchableOpacity , StyleSheet, Text, ImageBackground } from 'react-native';

const MyButton=(props)=>{
    return(
        <View style={styles.container}>
        <TouchableOpacity style={[styles.buttonContainer ,{backgroundColor:props.myColor}]} >
        <Text style={styles.input}>{props.mytitle}</Text>
        </TouchableOpacity>

        
        </View>

    );
};

const styles=StyleSheet.create({
    buttonContainer :{
        backgroundColor: "#fb5b5a",
        paddingVertical:5,
        borderRadius:20,
        alignItems: 'center',
    },
    container:{
        backgroundColor:'#003f5c',
        padding:1,
        margin:10,
        borderRadius:20,
    },
    input:{
        //height:40,
        //backgroundColor:`#ff6347`,
        //marginBottom:10,
        //borderRadius:20,
        color: 'black',
        //paddingHorizontal:10,
        justifyContent: 'center',
        padding:5,
    },


});
export default MyButton;
