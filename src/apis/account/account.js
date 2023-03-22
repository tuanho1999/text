import { axiosClient } from "../axiosClients";

const accountApis = {
    getAccount: () => {
        try {
            const res = axiosClient.get("/account");
            return res;
        }catch(e) {
            console.log(e);
        }
    },
     postAccount: (req) => {
        try {
            const res = axiosClient.post("/account",req);
            return res;
        }catch(e) {
            console.log(e);
        }
<<<<<<< HEAD
     },
     getAccountById: (id) => {
        try {
            const res = axiosClient.get(`/account/${id}`);
            return res;
        }catch(e) {
            console.log(e);
        }
=======
>>>>>>> 99f3d04eb607c8d901442d3bddaec127550888fe
     }
    
     
}
export default accountApis;