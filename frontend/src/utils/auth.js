class Auth {
  constructor({ url }) {
    this._url = url;

    this._options = {
      credentials: 'include'
    };
  }

  _getResponse(response) {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(`Ошибка: ${response.status}`);
  }

  register(password, email) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      ...this._options,
      body: JSON.stringify({ password, email }),
    }).then((res) => {
      return this._getResponse(res);
    });
  }

  login(password, email) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      ...this._options,
      body: JSON.stringify({ password, email }),
    }).then((res) => {
      return this._getResponse(res);
    });
  }

  checkToken(jwt) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`,
      },
      ...this._options,
    }).then((res) => {
      return this._getResponse(res);
    });
  }
}

export const authApi = new Auth({
  url: "https://api.interactiveservice.nomoredomainsrocks.ru",
});
