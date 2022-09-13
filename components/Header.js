import React from 'react';
import {StyleSheet , Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.text}> Todo List </Text>
        </View>
    )
    }

    const styles = StyleSheet.create({
        header:{
            height:80,
            paddingTop: 38,
            backgroundColor:'#7c89ea',
        },

        text:{
            textAlign:'center',
            fontSize:25,
            fontWeight:'bold',
            color:'#fff'
        }
    });

