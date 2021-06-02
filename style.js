import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default StyleSheet.create({

        container:{
            marginTop: 20,
            backgroundColor: "white",
            width: '100%',
            height: '100%',
        },

        textButton:{
            fontSize: 19,
            textAlign: 'center',
            color: 'white',
            backgroundColor: '#DC4545',
            borderRadius: 25,
            width: '80%',
            height: '40%',
            alignSelf: 'center',
            marginTop: '5%',
            textAlignVertical: 'center',
        },

        infoView:{
            alignSelf: 'center',
            width: '70%',
            textAlign: 'center',
            padding: '2%',
            borderRadius: 20,
            backgroundColor: '#DC4545',
        },

        infoText:{
            marginTop: '10%',
            color: 'white',
            fontSize: 15,
            textAlign: 'center',
        }

})