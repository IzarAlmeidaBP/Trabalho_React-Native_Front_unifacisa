const httpservice = {
  createUser: (data) => {
    return fetch('http://192.168.0.4:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },
};

export default httpservice;
