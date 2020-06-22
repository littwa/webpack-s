import api from './fetchApi.js';

const dataToSend = {number:'777'}
const options = {
  credentials: 'same-origin', 
  method: 'DELETE', 
  body: JSON.stringify(dataToSend),
  headers: {
    'Content-Type': 'application/json'
  }
};

// GET    /posts
// GET    /posts/1
// POST   /posts
// PUT    /posts/1
// PATCH  /posts/1
// DELETE /posts/1

api('posts/1', onData, options);



function onData(data){
  console.log(data);
}