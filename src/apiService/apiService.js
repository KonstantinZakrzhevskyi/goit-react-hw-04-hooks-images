const URL = {
  BASE_URL: 'https://pixabay.com/api',
  API_KEY: '23616749-9d77515f343e9cfce3b12231a',
  IMAGE_TYPE: 'photo',
  ORIENTATION: 'horizontal',
  PER_PAGE: 12,
};

export default function fetchGallery(query, page) {
  const url = `${URL.BASE_URL}/?q=${query}&page=${page}&key=${URL.API_KEY}&image_type=${URL.IMAGE_TYPE}&orientation=${URL.ORIENTATION}&per_page=${URL.PER_PAGE}`;

  return fetch(url)
    .then(data => (data.status !== 200 ? Promise.reject() : data.json()))
    .catch(err => console.error);
}
