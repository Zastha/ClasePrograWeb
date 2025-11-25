import axios from 'axios';

const personalApi=axios.create({
    baseURL: 'http://localhost:3001/api/personal'
});

export default personalApi;