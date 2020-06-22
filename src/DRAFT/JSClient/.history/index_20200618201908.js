import api from './fetchApi.js';

const options = {
  credentials: 'same-origin', 
  method: 'POST', 
  body: JSON.stringify({}),
  headers: {
    'Content-Type': 'application/json'
  }
};




 api('posts', onData);


function onData(data){
  console.log(data);
}