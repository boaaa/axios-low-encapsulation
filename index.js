import axios from 'axios';

export const post = (url, data, params) => {
    return new Promise((resolve) => {
      axios
        .post(url, data, { params })
        .then((result) => {
          resolve([null, result.data]);
        })
        .catch((err) => {
          resolve([err, undefined]);
        });
    });
  };

export const get = (url, data, params) => {
    return new Promise((resolve) => {
      axios
        .get(url, data, { params })
        .then((result) => {
          resolve([null, result.data]);
        })
        .catch((err) => {
          resolve([err, undefined]);
        });
    });
  };
