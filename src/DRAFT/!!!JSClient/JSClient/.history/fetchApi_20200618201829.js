
const BASE_URL = `http://localhost:3000/`;
export default function api(search, functionForRezult,  options={}){  
  
  fetch(BASE_URL + search, options).then(_=>_.json()).then(data=>{
   // console.log(data);
    functionForRezult(data);    
  }).catch(e=>console.log('WE SEE ERROR: ',e));
}

