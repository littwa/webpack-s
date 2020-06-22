import api from './fetchApi.js';

const options = {
  credentials: 'same-origin', 
  method: 'POST', 
  body: JSON.stringify({name:'Artem'}),
  headers: {
    'Content-Type': 'application/json'
  }
};




 api('posts', onData);


function onData(data){
  console.log(data);
}