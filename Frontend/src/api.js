import axios from 'axios';

const API = axios.create({
  baseURL: 'https://leaderboardtask-w7ty.onrender.com',
});

export default API;
