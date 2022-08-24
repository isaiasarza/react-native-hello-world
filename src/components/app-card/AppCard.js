import React from "react"
import { View, Text, StyleSheet } from 'react-native'

const AppCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}><Text>Holanda 1</Text></View>
            <View style={styles.box}><Text>Holanda 1</Text></View>
        </View>
    )
}

export default AppCard

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 120
    },
    box:{
        backgroundColor: 'violet',
        margin: 10,
        padding: 40,
        textAlign: 'center',
        borderRadius: 10
    }
})