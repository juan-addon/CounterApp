import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native';

interface Props{
    title:string;
    onPress: () => void;
    position?:'right' | 'left';
}

export const FloatingActionButton = ({title, onPress,position = 'right'}:Props) => {

    const ios = () => {
        return(
            <TouchableOpacity 
                activeOpacity={0.8}    
                style={[
                styles.fabLocation,
                (position === 'left' ? styles.fleft : styles.fright)]}
                onPress={ onPress }>
                    <View
                        style={styles.fab}>
                        <Text style={styles.fabtext}>{title}</Text>
    
                    </View>
            </TouchableOpacity>
        )

    }

    const android = ()=>{
        return (
            <View style={[
                styles.fabLocation,
                (position === 'left' ? styles.fleft : styles.fright)]}>
    
                 <TouchableNativeFeedback 
                    onPress={ onPress }
                    background={TouchableNativeFeedback.Ripple("#28425B",false, 30)}
                >
                    <View
                        style={styles.fab}>
                        <Text style={styles.fabtext}>{title}</Text>
    
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
       
    }

    return (Platform.OS ==='ios') ? ios(): android();
}

const styles = StyleSheet.create({
    fab:{
        backgroundColor:'#5856D6',
        width:60,
        height:60,
        borderRadius:100,
        justifyContent:'center',
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:4,
        },
        shadowOpacity: 0.30,
        shadowRadius:4.65,
        elevation:8,
    },

    fabLocation:{
        position:'absolute',
        bottom:25,
    },

    fright:{
        right:25
    },

    fleft:{
        left:25
    },

    fabtext:{
        color:'white',
        fontSize:25,
        fontWeight: 'bold',
        alignSelf:'center',
    }
});