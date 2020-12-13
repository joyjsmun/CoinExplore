import axios from "axios";

const api = axios.create({
    baseURL:"https://api.coinpaprika.com/v1"
})


export const coinApi = {
    showPricesList :() => api.get('/tickers'),
    showExchanges : () => api.get('/exchanges'),
    showCoins:() => api.get('/coins')

}