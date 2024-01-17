import axios from "axios";


const movieBaseUrl='https://api.themoviedb.org/3'
const api_key='3d85ed8a3515b32d60c40a73ecac30b7'


const getTrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);


export default{
    getTrendingVideos
}