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
     }
    
     
}
export default accountApis;