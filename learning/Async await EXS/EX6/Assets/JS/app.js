import { getUsers } from "./users-api.js";

async function init(){
  console.log(await getUsers());
  let sum = 0;
  let users = await getUsers();
  for(users of users){
    sum += users.age;
  }
  console.log(sum);
}

init();