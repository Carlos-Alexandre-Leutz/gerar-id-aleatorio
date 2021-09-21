//Math.floor(Date.now() * Math.random()).toString(36)
console.log("id", Math.floor(Date.now() * Math.random()).toString(36))

//npm --> npm i vue-uuid
//import
import { v4 as uuidv4 } from "uuid";
// usage
let id = uuidv4();
console.log("new id", id)
