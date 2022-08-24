import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, Image, Pressable, Modal } from 'react-native'
import { CryptoImages } from '../../utils/crypto-images';
import { formatter } from '../../utils/formatter';
import AppCharts from '../app-charts/AppCharts';
import AppChip from '../app-chip/AppChip';
import AppLocalImage from '../app-local-image/AppLocalImage';




const CurrencyItem = (props) => {

    const getColor = (number) => {
        const n = parseFloat(props.item.changePercent24Hr)
        return n >= 0 ? 'green' : 'red'
    }

    return (
        <View style={styles.itemContainer}>

            <AppLocalImage style={styles.itemLogo} img={CryptoImages[props.item.symbol.toLowerCase()]}></AppLocalImage>
            <View style={styles.itemDescription}>
                <Text style={styles.itemName}>{props.item.name}</Text>
                <Text style={styles.itemSymbol}>{props.item.symbol}</Text>
            </View>

            <View style={styles.itemPriceUsd}>
                <Text style={styles.itemChange24hr}>{formatter.format(props.item.priceUsd)}</Text>
                <View style={styles.itemChange24hr}><AppChip style={{ backgroundColor: getColor() }} value={`${parseFloat(props.item.changePercent24Hr).toFixed(2)} %`}></AppChip></View>
            </View>

        </View >
    )
}

const AppCurrencies = (props) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);

    const openModal = (item) => { 
        setCurrentItem(item)
        setModalVisible(true) 
    }

    const closeModal = () => { setModalVisible(false) }
    return (
        <View >
            <FlatList
                data={props.currencies}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <View>
                        <Pressable onPress={() => openModal(item)}>
                            <CurrencyItem item={item}></CurrencyItem>
                        </Pressable>
                    </View>
                )}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <AppCharts currency={currentItem} closeModal={closeModal}></AppCharts>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        //flex: 1,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        //backgroundColor: 'green',
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 0.3,
        borderRadius: 5,
        flexDirection: 'row',
        //justifyContent: 'center',
    },
    itemDescription: {
        flex: 1,
        alignSelf: 'center',
    },
    itemName: {
        fontSize: 24,
    },
    itemSymbol: {
        fontSize: 16,
        color: 'gray'
    },
    itemPriceUsd: {
        flex: 1,
        alignSelf: 'center',
        //justifyContent: 'flex-end',
        fontSize: 16,
    },
    itemChange24hr: {
        alignSelf: 'flex-end',
        fontSize: 16,
    },
    itemLogo: {
        width: 32,
        height: 32,
        alignSelf: 'center',
        marginRight: 8
    },
})

export default AppCurrencies