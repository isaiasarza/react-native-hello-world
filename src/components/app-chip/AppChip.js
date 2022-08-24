import React from 'react'
import {View, Text, StyleSheet}from 'react-native'

const AppChip = (props) => {

    //const { value, style } = this.props;
    const { container, text } = defaultStyle;
    //const combineStyles = StyleSheet.compose([container, style]);  

    return (
        <View style={StyleSheet.compose([container, props.style])}>
            <Text style={text}>{ props.value }</Text>
        </View>
    )
}

const defaultStyle = StyleSheet.create({
    container:{
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 5,
        alignSelf: 'center'
    },
    text:{
        color: '#fff',
        fontWeight: '700',
    }
})

export default AppChip