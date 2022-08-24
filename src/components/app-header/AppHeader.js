import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import IADevsColors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: IADevsColors.primary,
        height: 72,
        alignItems: 'center'
    },
    title: {
        marginTop: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 24
    //   paddingVertical: 8,
    //   borderWidth: 4,
    //   borderColor: "#20232a",
    //   borderRadius: 6,
    //   backgroundColor: "#61dafb",
    //   color: "#20232a",
    //   textAlign: "center",
    //   fontSize: 30,
    //   fontWeight: "bold"
    }
  });

const AppHeader = () => {
    return (
     <View style={styles.container}>
          <Text style={styles.title}>Bienvenido a iadevs</Text>
     </View>
        // <Text>Bienvenido a iadevs</Text>
    )
}

export default AppHeader;