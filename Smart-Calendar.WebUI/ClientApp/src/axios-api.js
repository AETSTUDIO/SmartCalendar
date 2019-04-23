import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://ec2-54-206-113-108.ap-southeast-2.compute.amazonaws.com/api'
});

export default instance;