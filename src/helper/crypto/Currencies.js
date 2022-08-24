import axios from "axios"

const getCurrencies = () => {
    //return fetch('https://api.coincap.io/v2/assets').then((response) => response.json())
    return axios
    .get('https://api.coincap.io/v2/assets')
    .then((res) => res.data.data)
}

const getCurrenciesHistory = (currencyId, interval) => {
    return axios
    .get(`https://api.coincap.io/v2/assets/${currencyId}/history`, { params: { interval: 'h1' } })
    .then(res => res.data.data)
}

const intervals = {
    m1: 'm1',
    m5: 'm5',
    m15: 'm15',
    m30: 'm30',
    h1: 'h1',
    h2: 'h2',
    h6: 'h6',
    h12: 'h12',
    d1: 'd1'
}

export { getCurrencies, getCurrenciesHistory, intervals }