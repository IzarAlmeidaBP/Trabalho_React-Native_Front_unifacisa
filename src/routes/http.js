const httpservice = {
  createUser: (data) => {
    return fetch('http://192.168.0.13:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },
  login: (data) => {
    return fetch('http://192.168.0.13:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },
};

export default httpservice;
