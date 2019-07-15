/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

// a err first callBack async request

function request(uri, opts, callback) {
  // handlers
}

// promiseify

Promise;
const promiseify = request => (uri, opts) => new Promise((resolve, reject)=>{
  request(uri, opts, (err, body)=>{
    if (err) {
      reject(err);
    }
    resolve(body);
  });
});

module.exports = promiseify;
