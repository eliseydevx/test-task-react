class Api {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  search(query) {
    return fetch(`${this._baseUrl}/search/photos?query=${query}`, {
      headers: {
        Authorization: `Client-ID ${this._apiKey}`,
      },
    }).then((res) => res.json());
  }
}

const api = new Api({
  baseUrl: "https://api.unsplash.com",
  apiKey: "M5qfCjinQMeTV9J6XSasbXvkMLB72sJHkAhb9E-3ODA",
});

export default api;
