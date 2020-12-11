import React from 'react';
import { View,TouchableOpacity , StyleSheet, Text, ImageBackground } from 'react-native';

const MyButton=(props)=>{
    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} >
        <Text style={styles.input}>{props.mytitle}</Text>
        </TouchableOpacity>

        
        </View>

    );
};

const styles=StyleSheet.create({
    buttonContainer :{
        //width:300, 
        backgroundColor: "#fb5b5a",
        paddingVertical:5,
        //padding:10,
        //paddingHorizontal:16,
        //fontSize:16,
        //margin:5,
        //marginBottom:10,
        //marginTop:-10,
        borderRadius:20,
        alignItems: 'center',
        //height:40,
        //height: 40,
        



       /*height:40,
       backgroundColor:`#ff6347`,
       marginBottom:10,
       borderRadius:20,
       color: '#FFF',
       paddingHorizontal:10,*/
    },
    container:{
        //backgroundColor:'#003f5c',
        backgroundColor:'#003f5c',
        padding:1,
        margin:10,
        borderRadius:20,
        //marginBottom:10,
        //height: 500, 
        //alignItems: 'center',
        


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
