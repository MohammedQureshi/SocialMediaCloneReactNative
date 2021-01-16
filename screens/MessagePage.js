import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

export function MessagePage(){
    return(
        <View style={style.mainView}>
            <View style={style.mainView} />
            <View style={style.secondary}>
                <Text style={style.mainText}> Message Page </Text>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    mainText: {
        fontSize: 25,
        color: "black",
        textAlign: 'center',
        fontWeight: 'bold'
    },
    mainView: {
        width: '100%'
    },
    secondary: {
        backgroundColor: 'powderblue',
        paddingTop: 30,
        paddingBottom: 10,
        
    }
})