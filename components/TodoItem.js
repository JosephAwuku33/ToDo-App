import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({item , pressHandler}){
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    let f_date = date + '/' + month + '/' + year;
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <MaterialIcons name='delete' size={18} color='#7c89ea'/>
            </TouchableOpacity>
            <Text style={styles.text}>{item.text}</Text>
            <Text style={styles.date}> {f_date} </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    item : {
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderRadius: 15,
        borderStyle:'dashed',
        borderWidth: 2,
        flexDirection:'row',
    },
    text : {
        marginLeft:10,
    },

    date : {
        fontSize:10,
        position:'absolute',
        top:35,
        left:40,
        paddingBottom:20
    }

});