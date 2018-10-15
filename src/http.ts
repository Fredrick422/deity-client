import axios from 'axios'
//import store from './store/'

const URL = process.env.VUE_APP_API_URL

export default() => {
    return axios.create({
        baseURL  : URL,
        timeout: 20000,
        headers: { 
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        }
    })
}