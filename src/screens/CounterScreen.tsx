import React, { useState } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { FloatingActionButton } from '../components/FloatingActionButton'

export const CounterScreen = () => {

    const [counter, setcounter] = useState(0)
    return (
        <View style={styles.container}>
                <Text style={styles.title}>Counter: {counter}</Text>
    

                <FloatingActionButton
                    title="+1"
                    onPress={ ()=> setcounter(counter + 1)}
                />

                <FloatingActionButton
                    title="-1"
                    onPress={ ()=> setcounter(counter - 1)}
                    position='left'
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'white'
    },

    title :{
        fontSize:50,
        top:-10,
        textAlign:'center'
    }
});