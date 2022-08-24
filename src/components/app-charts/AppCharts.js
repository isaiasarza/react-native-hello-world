import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect,  } from 'react'
import { View, Text, StyleSheet, Pressable, Button, Dimensions, Alert } from 'react-native'
import { getCurrenciesHistory, intervals } from '../../helper/crypto/Currencies';
import { CryptoImages } from '../../utils/crypto-images';
import { formatter } from '../../utils/formatter';
import AppLocalImage from '../app-local-image/AppLocalImage';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


const AppCharts = (props) => {
    const { id, symbol, name } = props.currency
    const [isLoading, setLoading] = useState(true);
    const [historyData, setHistoryData] = useState([])
    const [plotData, setPlotData] = useState(null)

    const screenWidth = 200;

    useEffect(() => {
        getCurrenciesHistory(id, intervals.h1)
            .then((_historyData) => {
                const normalized = _historyData.slice(-20).map(x => Math.trunc(x.priceUsd))
                setHistoryData(_historyData)
                setPlotData({
                    labels: [],
                    datasets: [{data: normalized}],
                })
                setLoading(false)
            })
            .catch((error) => console.error(error))
    }, [])

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.modalHeader}>
                    <View style={styles.label}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.symbol}>{symbol}</Text>
                    </View>
                    <AppLocalImage style={styles.logo} img={CryptoImages[symbol.toLowerCase()]}></AppLocalImage>
                </View>
                <View style={styles.modalContent}>
                    {
                        isLoading ?
                            <Text>Cargando historial</Text> :
                            <LineChart
                                data={plotData}
                                width={280}
                                height={400}
                                chartConfig={chartConfig}
                                bezier
                            />
                    }
                </View>
                <View style={styles.closeButton}>
                    <Button
                        onPress={() => props.closeModal()}
                        title="Cerrar"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 600,
        width: 300,
        borderRadius: 15,
        //alignItems: "center",
    },
    modalHeader: {
        alignSelf: "flex-start",
        flexDirection: 'row',
        //justifyContent: 'center',
        //borderColor: '#5b65ec',
        //borderWidth: 2,
        width: '100%',
        height: 80,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        borderRadius: 15,

    },
    modalContent: {
        //alignSelf: 'center',
        width: 300,
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 24,
    },
    symbol: {
        fontSize: 16,
        color: 'gray'
    },
    priceUsd: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 16,
    },
    change24hr: {
        alignSelf: 'flex-end',
        fontSize: 16,
    },
    label: {
        flex: 1,
        borderColor: '#5b65ec',
        //borderWidth: 2,
        //justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20,
    },
    logo: {
        width: 64,
        alignSelf: 'flex-end',
        borderColor: 'black',
        paddingEnd: 10,
        //borderWidth: 2
    },
    name: {
        //margin: 10,
        fontSize: 24,
    },
    symbol: {
        fontSize: 16,
        color: 'gray',
        //margin: 10,
    },
    closeButton: {
        bottom: 0
    }
});

const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgb(91, 101, 236, ${opacity})`,
    withDots: false,
    withInnerLines: false,
    withVerticalLines: false,
    withHorizontalLines: false,
};

export default AppCharts