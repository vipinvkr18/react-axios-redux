import axios from "axios";

const BASE_URL = "http://localhost:3000/users";

class UsersService {

   static getUsers(){
     return axios.get(BASE_URL);
    }
    static getUser(id){
        return axios.get(BASE_URL+'/'+id);
    }
    static createUser(user){
       return axios.post(BASE_URL,user);
    }

    static  deleteUser(id){
        return axios.delete(BASE_URL+'/'+id);
    }
    static updateUser(user){
        return axios.put(BASE_URL+'/'+user.id,user);
     }
}

//export default new UsersService();

export default UsersService;