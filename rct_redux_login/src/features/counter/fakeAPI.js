export const fakeLoginAPI = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'waga' && password === '123') {
          resolve({ success: true });
        } else {
          reject(new Error('Invalid username or password'));
        }
      }, 1000);
    });
  };
  