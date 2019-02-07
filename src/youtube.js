import axios from 'axios';
import keys from './keys';

const key = keys.YouTube;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key,
  }
});
