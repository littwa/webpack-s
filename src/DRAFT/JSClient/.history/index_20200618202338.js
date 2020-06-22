import api from './fetchApi.js';

const options = {
  credentials: 'same-origin', 
  method: 'POST', 
  body: JSON.stringify({name:'Artem'}),
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


 api('posts', onData);


function onData(data){
  console.log(data);
}