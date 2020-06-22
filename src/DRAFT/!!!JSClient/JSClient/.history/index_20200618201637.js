import api from './fetchApi.js';

const options = {
  credentials: 'same-origin', 
  method: 'POST', 
  body: JSON.stringify({}),
  headers: {
    'Content-Type': 'application/json'
  }
};




 api('posts', onData, options);


function onData(data){
  console.log(onData);
}