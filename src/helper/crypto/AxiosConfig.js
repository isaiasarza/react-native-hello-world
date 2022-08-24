import axios from "axios";

const cryptoAxiosInstance= axios.create({ baseURL: 'api.coincap.io' });

export default cryptoAxiosInstance