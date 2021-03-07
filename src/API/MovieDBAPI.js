import axios from 'axios';

const KEY = 'b51fc1e264bb092275cb2658c6750567';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/search',
    params: {
        api_key: KEY,
        include_adult: 'true',
    }
})