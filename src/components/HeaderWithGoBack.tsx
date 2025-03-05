import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { navigate } from 'expo-router/build/global-state/routing'

const HeaderWithGoBack = ({title}:any) => {
  return (
    <View>
        <View style={styles.flex}>
            <TouchableOpacity style={styles.backButton} >
                <Ionicons name="arrow-back" size={23} color="#000000" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    </View>
  )
}

export default HeaderWithGoBack;

const styles = StyleSheet.create({
    flex:{
        display:"flex",
        width:230,
       flexDirection:"row",
       alignItems:"center"
    },
    backButton: {
        padding: 8,
    },
    title: {
        fontSize: 20,
        paddingLeft:5,
        fontWeight: 'bold',
        color: '#000000',
    },
});