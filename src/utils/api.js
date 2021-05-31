import axios from 'axios'


 const api =  axios.create({
    //baseURL: 'https://api.spacexdata.com/v4/launches',
    baseURL: 'http://localhost:3000',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    timeout: 2000,
});

export default api;