import { faCoffee, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import React from "react"
import { View, Text, StyleSheet, TextInput } from 'react-native'
import IADevsColors from "../../constants/colors"

const AppSearchbar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchbar}>
                <TextInput style={styles.input} placeholder='Encontrá eso que tanto anhelas'></TextInput>
                <FontAwesomeIcon style={styles.icon} icon={faSearch}/>
            </View>
        </View>
    )
}

export default AppSearchbar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 80,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: IADevsColors.primary,
       // opacity: 0.5
    },
    searchbar: {
        //flex: 1,
        height: 40,
        alignSelf: 'stretch',
        marginStart: 10,
        marginEnd: 10,
        paddingStart: 10,
        paddingEnd: 10,
        borderColor: '#eef1f4',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        fontWeight: 'bold',
        justifyContent: 'center',  
        flexDirection: 'row',
    },
    input:{
        flex: 1,
        alignSelf: 'center',     
    },
    icon:{
        flex: 1,
        alignSelf: 'center',
    }
})