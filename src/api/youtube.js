import axios from 'axios';

export default axios.create({
    // this is the HTTP URL for youtube
    baseURL: 'https://www.googleapis.com/youtube/v3',
})


