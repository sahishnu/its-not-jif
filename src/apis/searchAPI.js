import { BASE_URL, GIPHY_API_KEY} from '../config';
import axios from 'axios';

export default function searchGifsAPI (searchValue, page) {
  const url = buildSearchUrl(searchValue, page);
  return axios.get(url)
  .then((response) => {
    const { data } = response;
    return data;
  })
  .catch((err) => {
    console.log(err);
  })
}

function buildSearchUrl (s, p) {
  const url = `${BASE_URL}/search?api_key=${GIPHY_API_KEY}&q=${s.split(' ').join('+')}&offset=${p*25}`;

  return url;
}