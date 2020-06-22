
const BASE_URL = `http://localhost:3000/`;
export default function api(search, functionForRezult,  data={}){  
  
  fetch(BASE_URL + search, data).then(_=>_.json()).then(data=>{
    functionForRezult(data);    
  }).catch(e=>console.log('WE SEE ERROR: ',e));
}

