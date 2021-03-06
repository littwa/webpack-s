import api from './fetchApi.js';

const options = {
  credentials: 'same-origin', 
  method: 'PATCH', 
  body: JSON.stringify({text:'NEW TEXT FROM PUT CALL', name:"Artem"}),
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